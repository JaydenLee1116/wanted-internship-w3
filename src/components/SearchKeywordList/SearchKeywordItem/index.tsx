import React from 'react';

import { SickItem } from '../../../types';
import * as S from './SearchKeywordItem.styled';

interface SearchKeywordItemProps {
  name: SickItem['sickNm'];
  itemRef: (element: HTMLElement | null) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const SearchKeywordItem = ({ name, itemRef, onKeyDown }: SearchKeywordItemProps) => {
  return (
    <S.Item ref={itemRef} onKeyDown={onKeyDown} tabIndex={0}>
      {name}
    </S.Item>
  );
};
