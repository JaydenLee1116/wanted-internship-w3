import React from 'react';

import { SickItem } from '../../../types';
import { SearchKeywordItem } from './SearchKeywordItem';
import * as S from './SearchKeywordList.styled';

interface SearchKeywordListProps {
  sickList: SickItem[];
}

export const SearchKeywordList = ({ sickList }: SearchKeywordListProps) => {
  return (
    <S.List>
      {sickList.map(sickItem => {
        return <SearchKeywordItem key={sickItem.sickCd} name={sickItem.sickNm}></SearchKeywordItem>;
      })}
    </S.List>
  );
};
