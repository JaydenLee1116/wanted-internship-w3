import React from 'react';

import { SickItem } from '../../types';
import { SearchKeywordItem } from './SearchKeywordItem';
import * as S from './SearchKeywordList.styled';

interface SearchKeywordListProps {
  keywordList: SickItem[];
}

export const SearchKeywordList = ({ keywordList }: SearchKeywordListProps) => {
  return (
    <S.List>
      {keywordList.map(keywordItem => {
        return (
          <SearchKeywordItem key={keywordItem.sickCd} name={keywordItem.sickNm}></SearchKeywordItem>
        );
      })}
    </S.List>
  );
};
