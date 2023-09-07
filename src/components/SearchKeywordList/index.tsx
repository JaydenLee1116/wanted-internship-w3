import React from 'react';

import { SickItem } from '../../types';
import { hasValue } from '../../utils/hasValue';
import { SearchKeywordItem } from './SearchKeywordItem';
import * as S from './SearchKeywordList.styled';

interface SearchKeywordListProps {
  keywordList?: SickItem[] | null;
  focusIndex: number;
}

export const SearchKeywordList = ({ keywordList, focusIndex }: SearchKeywordListProps) => {
  return (
    <S.List>
      {hasValue(keywordList) &&
        keywordList?.map((keywordItem, index, array) => {
          return (
            <SearchKeywordItem
              key={keywordItem.sickCd}
              name={keywordItem.sickNm}
              isFocused={index === focusIndex % array.length}
            />
          );
        })}
    </S.List>
  );
};
