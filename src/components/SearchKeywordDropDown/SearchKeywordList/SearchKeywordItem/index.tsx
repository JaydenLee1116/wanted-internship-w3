import React from 'react';

import { SickItem } from '../../../../types';
import * as S from './SearchKeywordItem.styled';

interface SearchKeywordItemProps {
  name: SickItem['sickNm'];
}

export const SearchKeywordItem = ({ name }: SearchKeywordItemProps) => {
  return <S.Item>{name}</S.Item>;
};
