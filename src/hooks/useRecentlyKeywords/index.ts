import { useState } from 'react';

export const useRecentlyKeywords = () => {
  const [recentlyKeywords, setRecentlyKeywords] = useState<string[]>(
    JSON.parse(sessionStorage.getItem('recentlyKeywords') || '[]'),
  );
  const handleRecentlyKeywords = (keyword: string) => {
    setRecentlyKeywords([...recentlyKeywords, keyword]);
    sessionStorage.setItem('recentlyKeywords', JSON.stringify([...recentlyKeywords, keyword]));
  };

  return [recentlyKeywords, handleRecentlyKeywords] as const;
};
