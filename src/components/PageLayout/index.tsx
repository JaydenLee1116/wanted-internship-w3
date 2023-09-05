import React from 'react';

import * as S from './PageLayout.styled';

interface PageLayoutProps {
  children: React.ReactNode;
  gap?: string;
  backgroundColor?: 'primary' | 'secondary' | 'black';
}

export const PageLayout = ({ children, gap, backgroundColor }: PageLayoutProps) => {
  return (
    <S.PageLayoutContainer $gap={gap} $backgroundColor={backgroundColor}>
      {children}
    </S.PageLayoutContainer>
  );
};
