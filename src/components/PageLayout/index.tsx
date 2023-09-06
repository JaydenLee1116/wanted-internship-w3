import React, { MouseEvent } from 'react';

import * as S from './PageLayout.styled';

interface PageLayoutProps {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  gap?: string;
  backgroundColor?: 'primary' | 'secondary' | 'black';
}

export const PageLayout = ({ children, gap, backgroundColor, onClick }: PageLayoutProps) => {
  return (
    <S.PageLayoutContainer onClick={onClick} $gap={gap} $backgroundColor={backgroundColor}>
      {children}
    </S.PageLayoutContainer>
  );
};
