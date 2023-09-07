import React from 'react';

import { SickItem } from '../../types';
import { MAX_SHOWN_KEYWORD_LIST_LENGTH, ONE_DAY } from '../../constants';
import { hasValue } from '../../utils/hasValue';
import { useInput } from '../../hooks/useInput';
import { useIsRefFocused } from '../../hooks/useIsRefFocused';
import { useRecentlyKeywords } from '../../hooks/useRecentlyKeywords';
import { useGetQuery } from '../../hooks/useGetQuery';
import { PageLayout } from '../../components/PageLayout';
import { SearchKeywordList } from '../../components/SearchKeywordList';
import * as S from './SearchPage.styled';

export const SearchPage = () => {
  const [searchText, handleSearchInputChange] = useInput('');
  const [ref, isRefFocused, handleRefClick] = useIsRefFocused();
  const [recentlyKeywords, handleRecentlyKeywords] = useRecentlyKeywords();
  const [data, isLoading, isError] = useGetQuery<{ sick: SickItem[] }>({
    q: searchText,
    config: { expiredTime: ONE_DAY },
  });
  const [focusIndex, setFocusIndex] = React.useState(-1);
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
            onKeyDown={e => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setFocusIndex(prev => prev + 1);
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault();
                setFocusIndex(prev => {
                  if (prev === -1) {
                    return prev;
                  }
                  return prev - 1;
                });
              }
              if (e.key === 'Enter') {
                e.preventDefault();
                if (hasValue(searchText)) {
                  handleRecentlyKeywords(searchText);
                }
              }
            }}
            ref={ref}
            type="text"
            placeholder="질환명을 입력해 주세요."
          />
          <S.Button />
        </S.Form>
        {isRefFocused && (
          <S.SearchKeywordContainer>
            {hasValue(searchText) ? (
              <>
                {isLoading && <div>검색 중...</div>}
                {isError && <div>에러가 발생했습니다.</div>}
                {!(isLoading || isError) && (
                  <SearchKeywordList
                    keywordList={data?.sick.slice(0, MAX_SHOWN_KEYWORD_LIST_LENGTH)}
                    focusIndex={focusIndex}
                  />
                )}
              </>
            ) : (
              <SearchKeywordList
                keywordList={recentlyKeywords.map((keyword, index) => ({
                  sickCd: index.toString(),
                  sickNm: keyword,
                }))}
                focusIndex={focusIndex}
              />
            )}
          </S.SearchKeywordContainer>
        )}
      </S.Main>
      <S.Footer>@Wanted Internship By JaydenLee1116</S.Footer>
    </PageLayout>
  );
};
