import styled from 'styled-components';

import { fontSizes } from '../../theme';

export const LanguageButton = styled.button`
  cursor: pointer;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;

  margin: 3px;
  font-size: ${fontSizes.titleSizeMedium};
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.calculatorButton};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.black};
    border: 1px solid ${props => props.theme.black};
    transition: 0.3s ease-in-out;
  }
`;
