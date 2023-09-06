import { useEffect, useState } from 'react';

import { MOCK_API_PATH } from '../../api/apiConfig';
import { DEBOUNCE_DELAY, ONE_DAY } from '../../constants';
import { axiosFetch } from '../../api/axiosInstance';
import { useCache } from '../../context/CacheContext';
import { useCacheChange } from '../../context/CacheContext';

interface useGetQueryProps {
  q: string;
  config?: {
    expiredTime: number;
  };
}

export const useGetQuery = <T>({ q, config }: useGetQueryProps) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const cache = useCache();
  const updateCache = useCacheChange();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    // NOTE: cache에 데이터가 있으면 cache에서 가져오기
    const cacheData = cache.current.get(q);
    if (cacheData) {
      setData(cacheData);
      setIsLoading(false);
      return;
    }

    const getData = async () => {
      await axiosFetch
        .get(MOCK_API_PATH.SICK, { params: { q } })
        .then(response => {
          setData(response.data);
          updateCache(q, response.data, config?.expiredTime || ONE_DAY);
        })
        .catch(err => {
          setIsError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
      console.info('calling api');
    };

    // NOTE: useEffect의 cleanup을 통해 debounce 처리
    const timeOutId = setTimeout(async () => {
      await getData();
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [q, setData, setIsLoading, setIsError]);

  return [data, isLoading, isError] as const;
};
