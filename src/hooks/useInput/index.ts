import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  }, []);
  return [value, setValue, handleInputChange] as const;
};
