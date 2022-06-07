import styled from 'styled-components';

import { fontSizes } from '../../theme';

export const StyledSettingsButton = styled.button`
  cursor: pointer;
  text-align: center;
  width: 400px;
  height: 95px;
  border-radius: 8px;
  padding-right: 140px;
  padding-left: 25px;
  margin: 30px 60px;
  font-size: ${fontSizes.titleSize};
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.calculatorButton};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.error};
    border: 1px solid ${props => props.theme.error};
    transition: 0.3s ease-in-out;
  }
`;

export const StyledSettingsSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  width: 400px;
  height: 95px;
  border-radius: 8px;
  padding: 30px;
  margin: 30px 60px;
  font-size: ${fontSizes.titleSize};
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.calculatorButton};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.black};
    transition: 0.3s ease-in-out;
  }
`;

export const SelectorTitle = styled.div`
  text-align: center;
  &:hover,
  &:focus {
    color: ${props => props.theme.white};
  }
`;
