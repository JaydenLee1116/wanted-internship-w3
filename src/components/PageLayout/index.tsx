import React from 'react';

import * as S from './PageLayout.styled';

interface PageLayoutProps {
  children: React.ReactNode;
  gap?: string;
}

export const PageLayout = ({ children, gap }: PageLayoutProps) => {
  return <S.PageLayoutContainer gap={gap}>{children}</S.PageLayoutContainer>;
};
