import React from 'react';

import { SickItem } from '../../types';
import { hasValue } from '../../utils/hasValue';
import { SearchKeywordItem } from './SearchKeywordItem';
import * as S from './SearchKeywordList.styled';

interface SearchKeywordListProps {
  keywordList?: SickItem[] | null;
}

export const SearchKeywordList = ({ keywordList }: SearchKeywordListProps) => {
  console.log(hasValue(keywordList));
  return (
    <S.List>
      {hasValue(keywordList) &&
        keywordList?.map(keywordItem => {
          return (
            <SearchKeywordItem
              key={keywordItem.sickCd}
              name={keywordItem.sickNm}
            ></SearchKeywordItem>
          );
        })}
    </S.List>
  );
};
