import React, { useRef } from 'react';

import { SickItem } from '../../types';
import { MAX_SHOWN_KEYWORD_LIST_LENGTH, ONE_DAY, KEYBOARD_EVENT_KEY } from '../../constants';
import { hasValue } from '../../utils/hasValue';
import { useInput } from '../../hooks/useInput';
import { useIsRefFocused } from '../../hooks/useIsRefFocused';
import { useRecentlyKeywords } from '../../hooks/useRecentlyKeywords';
import { useGetQuery } from '../../hooks/useGetQuery';
import { PageLayout } from '../../components/PageLayout';
import { SearchKeywordList } from '../../components/SearchKeywordList';
import * as S from './SearchPage.styled';

export const SearchPage = () => {
  const [searchText, setSearchText, handleSearchInputChange] = useInput('');
  const [ref, isRefFocused, handleRefClick] = useIsRefFocused();
  const [recentlyKeywords, handleRecentlyKeywords] = useRecentlyKeywords();
  const [data, isLoading, isError] = useGetQuery<{ sick: SickItem[] }>({
    q: searchText,
    config: { expiredTime: ONE_DAY },
  });
  const keywordListRef = useRef<HTMLElement[]>([]);

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === KEYBOARD_EVENT_KEY.ARROW_UP) {
      e.preventDefault();
      return;
    }
    if (e.key === KEYBOARD_EVENT_KEY.ARROW_DOWN) {
      e.preventDefault();
      if (e.nativeEvent.isComposing) return;
      keywordListRef.current[0]?.focus();
    }
  };

  const handleKeywordItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === KEYBOARD_EVENT_KEY.ARROW_DOWN) {
      e.preventDefault();
      keywordListRef.current[index + 1]?.focus();
      return;
    }
    if (e.key === KEYBOARD_EVENT_KEY.ARROW_UP) {
      e.preventDefault();
      if (index === 0) {
        ref.current?.focus();
        return;
      }
      keywordListRef.current[index - 1]?.focus();
      return;
    }
    if (e.key === KEYBOARD_EVENT_KEY.ENTER) {
      e.preventDefault();
      setSearchText(keywordListRef.current[index].textContent || '');
      ref.current?.focus();
    }
  };

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
            onKeyDown={handleInputKeyDown}
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
                <S.SearchInfo $isBlack={true}>{searchText}</S.SearchInfo>
                {hasValue(data?.sick) && <S.SearchInfo>추천 검색어</S.SearchInfo>}
                {isLoading && <S.SearchInfo $isBlack={true}>검색 중...</S.SearchInfo>}
                {isError && <S.SearchInfo>에러가 발생했습니다.</S.SearchInfo>}
                {!(isLoading || isError) && (
                  <SearchKeywordList
                    keywordList={data?.sick.slice(0, MAX_SHOWN_KEYWORD_LIST_LENGTH)}
                    listRef={keywordListRef}
                    onKeywordItemKeyDown={handleKeywordItemKeyDown}
                  />
                )}
              </>
            ) : (
              <>
                <S.SearchInfo>최근 검색어</S.SearchInfo>
                <SearchKeywordList
                  keywordList={recentlyKeywords.map((keyword, index) => ({
                    sickCd: index.toString(),
                    sickNm: keyword,
                  }))}
                  listRef={keywordListRef}
                  onKeywordItemKeyDown={handleKeywordItemKeyDown}
                />
                {hasValue(searchText) || <S.SearchInfo>검색어 없음</S.SearchInfo>}
              </>
            )}
          </S.SearchKeywordContainer>
        )}
      </S.Main>
      <S.Footer>@Wanted Internship By JaydenLee1116</S.Footer>
    </PageLayout>
  );
};
