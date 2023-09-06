import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.transparent};
  border-radius: 16px;
  top: calc(100% + 16px);
`;
