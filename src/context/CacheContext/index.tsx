import React, { useRef } from 'react';

import { createContext, useContext } from 'react';

const CacheContext = createContext<any>(null);
const CacheChangeContext = createContext<any>(null);

export const useCache = () => useContext(CacheContext);
export const useCacheChange = () => useContext(CacheChangeContext);

interface CacheProviderProps {
  children: React.ReactNode;
}

export const CacheProvider = ({ children }: CacheProviderProps) => {
  const cacheRef = useRef(new Map());

  const updateCache = (key: any, value: any, expiredTime: number) => {
    cacheRef.current.set(key, value);
    setTimeout(() => {
      cacheRef.current.delete(key);
    }, expiredTime);
  };

  return (
    <CacheContext.Provider value={cacheRef}>
      <CacheChangeContext.Provider value={updateCache}>{children}</CacheChangeContext.Provider>
    </CacheContext.Provider>
  );
};
