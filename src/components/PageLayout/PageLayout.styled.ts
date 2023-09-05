import { styled } from 'styled-components';

export const PageLayoutContainer = styled.section<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: ${({ gap }) => gap || '0'};
`;
