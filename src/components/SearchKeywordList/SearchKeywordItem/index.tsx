import React from 'react';

import { SickItem } from '../../../types';
import * as S from './SearchKeywordItem.styled';

interface SearchKeywordItemProps {
  name: SickItem['sickNm'];
  isFocused: boolean;
}

export const SearchKeywordItem = ({ name, isFocused }: SearchKeywordItemProps) => {
  return <S.Item isFocused={isFocused}>{name}</S.Item>;
};
