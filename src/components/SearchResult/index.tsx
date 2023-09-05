import React from 'react';

import * as S from './SearchResult.styled';

interface SearchResultProps {
  children: React.ReactNode;
}

export const SearchResult = ({ children }: SearchResultProps) => {
  return <S.Container>{children}</S.Container>;
};
