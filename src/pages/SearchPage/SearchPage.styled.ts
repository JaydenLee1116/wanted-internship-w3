import { styled } from 'styled-components';

import searchIconGray from '../../assets/icons/search-gray.svg';
import searchIconWhite from '../../assets/icons/search-white.svg';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.6;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  width: 600px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  &:focus-within {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  outline: none;
  width: 90%;
  height: 70%;
  border-radius: 40px;
  font-size: 24px;
  background-image: url(${searchIconGray});
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: 40px;
  padding-left: 48px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  &:focus {
    background-image: none;
    padding-left: 8px;
    &::placeholder {
      color: transparent;
    }
  }
`;

export const Button = styled.button`
  outline: none;
  width: 48px;
  height: 48px;
  border-radius: 40px;
  background-image: url(${searchIconWhite});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const SearchKeywordContainer = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 600px;
  height: fit-content;
  padding: 16px 0;
  top: calc(100% + 16px);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.colors.primary};
`;

export const SearchInfo = styled.p<{ $isBlack?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme, $isBlack }) => ($isBlack ? theme.colors.black : theme.colors.darkGray)};
  padding: 0 24px;
  margin: 8px 0;
`;
