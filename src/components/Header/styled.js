import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { fontSizes } from '../../theme';

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.white};
  font-size: ${fontSizes.titleSize};
  font-weight: normal;
  margin: 42px auto 42px 32px;
  @media (max-width: 1250px) {
    font-size: ${fontSizes.titleSizeMedium};
  }
  @media (max-width: 800px) {
    font-size: ${fontSizes.titleSizeSmall};
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 42px 32px 42px 0;
  font-size: ${fontSizes.titleSize};
  position: relative;
  color: ${props => props.color || props.theme.white};
  @media (max-width: 1250px) {
    margin: 30px 15px 30px 0;
  }
  @media (max-width: 800px) {
    margin: 10px 5px 10px 0;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
  color: ${props => props.color || props.theme.white};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${props => props.color || props.theme.white};
    &:after {
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.color || props.theme.white};
      content: '';
      transition: width 0.3s ease-out;
    }
    &:hover:after,
    &:focus:after {
      width: 100%;
    }
  }
  @media (max-width: 1250px) {
    font-size: ${fontSizes.titleSizeMedium};
  }
  @media (max-width: 800px) {
    font-size: ${fontSizes.titleSizeSmall};
  }
`;
export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.black};
  margin: 0 auto;
  max-width: 1835px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1250px) {
    max-width: 1200px;
    padding: 10px 0;
  }
  @media (max-width: 800px) {
    max-width: 750px;
    padding: 5px 0;
    flex-direction: column;
  }
`;
