import { useEffect, useState } from 'react';

import { axiosFetch } from '../../api/axiosInstance';
import { DEBOUNCE_DELAY } from '../../constants';

export const useGetQuery = <T>(url: string, q: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      await axiosFetch
        .get(url, {
          params: {
            q,
          },
        })
        .then(response => {
          setData(response.data);
        })
        .catch(err => {
          setIsError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    // NOTE: useEffect의 cleanup을 통해 debounce 처리
    const timeOutId = setTimeout(async () => {
      await getData();
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [url, q, setData, setIsLoading, setIsError]);

  return [data, isLoading, isError] as const;
};
