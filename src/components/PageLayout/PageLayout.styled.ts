import { css, styled } from 'styled-components';

const backgroundColor = css<{ $backgroundColor?: string }>`
  background-color: ${({ theme, $backgroundColor }) => {
    switch ($backgroundColor) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'black':
        return theme.colors.black;
      default:
        return theme.colors.white;
    }
  }};
`;

export const PageLayoutContainer = styled.section<{ $gap?: string; $backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: ${({ $gap }) => $gap || '0'};
  ${backgroundColor}
`;
