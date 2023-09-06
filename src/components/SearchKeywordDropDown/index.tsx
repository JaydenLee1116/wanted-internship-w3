import React from 'react';

import { SearchKeywordList } from './SearchKeywordList';
import * as S from './SearchKeywordDropDown.styled';

// interface SearchKeywordDropDownProps {}

export const SearchKeywordDropDown = () => {
  return (
    <S.Container>
      <SearchKeywordList
        sickList={[
          {
            sickCd: '1',
            sickNm: '감기',
          },
          {
            sickCd: '2',
            sickNm: '독감',
          },
        ]}
      />
    </S.Container>
  );
};
