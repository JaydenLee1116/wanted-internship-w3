import { styled } from 'styled-components';

import searchIconGray from '../../../assets/icons/search-gray.svg';

export const Item = styled.li<{ isFocused: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 0 48px;
  border-radius: 8px;
  font-size: 16px;
  background-image: url(${searchIconGray});
  background-repeat: no-repeat;
  background-position: 16px center;
  background-size: 24px;
  background-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.lightGray : theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
