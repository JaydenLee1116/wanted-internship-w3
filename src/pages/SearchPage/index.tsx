import React from 'react';

import { PageLayout } from '../../components/PageLayout';
import * as S from './SearchPage.styled';

export const SearchPage = () => {
  return (
    <PageLayout gap={'160px'} backgroundColor="secondary">
      <S.Header>
        <S.Title>
          국내 모든 임상시험 검색하고
          <br /> 온라인으로 참여하기
        </S.Title>
      </S.Header>
      <S.Main>
        <S.Form>
          <S.Input type="text" placeholder="질환명을 입력해 주세요." />
          <S.Button />
        </S.Form>
      </S.Main>
      <S.Footer>@Wanted Internship By JaydenLee1116</S.Footer>
    </PageLayout>
  );
};
