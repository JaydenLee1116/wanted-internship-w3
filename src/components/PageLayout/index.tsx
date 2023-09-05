import React from 'react';

import * as S from './PageLayout.styled';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <S.PageLayoutContainer>{children}</S.PageLayoutContainer>;
};
