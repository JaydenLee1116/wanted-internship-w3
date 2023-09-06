import React from 'react';

import { useInput } from '../../hooks/useInput';
import { useIsRefFocused } from '../../hooks/useIsRefFocused';
import { PageLayout } from '../../components/PageLayout';
import { SearchKeywordDropDown } from '../../components/SearchKeywordDropDown';
import * as S from './SearchPage.styled';

export const SearchPage = () => {
  const [searchText, handleSearchInputChange] = useInput('');
  const [ref, isRefFocused, handleRefClick] = useIsRefFocused();

  return (
    <PageLayout onClick={handleRefClick} gap={'160px'} backgroundColor="secondary">
      <S.Header>
        <S.Title>
          국내 모든 임상시험 검색하고
          <br /> 온라인으로 참여하기
        </S.Title>
      </S.Header>
      <S.Main>
        <S.Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <S.Input
            value={searchText}
            onChange={handleSearchInputChange}
            ref={ref}
            type="text"
            placeholder="질환명을 입력해 주세요."
          />
          <S.Button />
        </S.Form>
        {isRefFocused && <SearchKeywordDropDown />}
      </S.Main>
      <S.Footer>@Wanted Internship By JaydenLee1116</S.Footer>
    </PageLayout>
  );
};
