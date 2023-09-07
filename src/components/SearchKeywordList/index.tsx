import React from 'react';

import { SickItem } from '../../types';
import { hasValue } from '../../utils/hasValue';
import { SearchKeywordItem } from './SearchKeywordItem';
import * as S from './SearchKeywordList.styled';

interface SearchKeywordListProps {
  keywordList?: SickItem[] | null;
  listRef: React.MutableRefObject<HTMLElement[]>;
  onKeywordItemKeyDown: (e: React.KeyboardEvent, index: number) => void;
}

export const SearchKeywordList = ({
  keywordList,
  listRef,
  onKeywordItemKeyDown,
}: SearchKeywordListProps) => {
  return (
    <S.List>
      {hasValue(keywordList) &&
        keywordList?.map((keywordItem, index) => {
          return (
            <SearchKeywordItem
              key={keywordItem.sickCd}
              name={keywordItem.sickNm}
              itemRef={element => {
                if (!element) {
                  return;
                }
                listRef.current[index] = element;
              }}
              onKeyDown={e => {
                onKeywordItemKeyDown(e, index);
              }}
            />
          );
        })}
    </S.List>
  );
};
