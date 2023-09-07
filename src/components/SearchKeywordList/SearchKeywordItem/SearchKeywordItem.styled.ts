import { styled } from 'styled-components';

import searchIconGray from '../../../assets/icons/search-gray.svg';

export const Item = styled.li`
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
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
  &:focus {
    outline: none;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
