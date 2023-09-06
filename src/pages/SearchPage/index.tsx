import React from 'react';

import { isEmpty } from '../../utils/isEmpty';
import { useInput } from '../../hooks/useInput';
import { useIsRefFocused } from '../../hooks/useIsRefFocused';
import { useRecentlyKeywords } from '../../hooks/useRecentlyKeywords';
import { PageLayout } from '../../components/PageLayout';
import { SearchKeywordList } from '../../components/SearchKeywordList';
import * as S from './SearchPage.styled';

export const SearchPage = () => {
  const [searchText, handleSearchInputChange] = useInput('');
  const [ref, isRefFocused, handleRefClick] = useIsRefFocused();
  const [recentlyKeywords, handleRecentlyKeywords] = useRecentlyKeywords();

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
            handleRecentlyKeywords(searchText);
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
        {isRefFocused && (
          <S.SearchKeywordContainer>
            {isEmpty(searchText) ? (
              <SearchKeywordList
                keywordList={recentlyKeywords.map((keyword, index) => ({
                  sickCd: index.toString(),
                  sickNm: keyword,
                }))}
              />
            ) : (
              <SearchKeywordList
                keywordList={[
                  {
                    sickCd: '0',
                    sickNm: '감기',
                  },
                  {
                    sickCd: '1',
                    sickNm: '독감',
                  },
                ]}
              />
            )}
          </S.SearchKeywordContainer>
        )}
      </S.Main>
      <S.Footer>@Wanted Internship By JaydenLee1116</S.Footer>
    </PageLayout>
  );
};
