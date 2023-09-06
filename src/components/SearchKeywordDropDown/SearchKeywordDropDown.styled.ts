import { styled } from 'styled-components';

export const Container = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: fit-content;
  padding: 16px 0;
  top: calc(100% + 16px);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colors.primary};
`;
