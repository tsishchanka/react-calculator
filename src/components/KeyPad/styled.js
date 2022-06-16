import styled from 'styled-components';

import { fontSizes } from 'theme';

export const KeyPadWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.white};
  @media (max-width: 1480px) {
    flex-direction: column;
  }
`;

export const KeypadButton = styled.button`
  cursor: pointer;
  font-size: ${fontSizes.nameKeySize};
  text-align: center;
  width: 125px;
  height: 125px;
  border-radius: 32px;
  margin: 18px 25px;
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.calculatorButton};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.secondary};
    transition: 0.3s ease-out;
    color: ${props => props.theme.black};
  }
  @media (max-width: 1480px) {
    font-size: ${fontSizes.nameKeySizeMedium};
    text-align: center;
    padding-top: 8px;
    width: 80px;
    height: 80px;
    border-radius: 16px;
    margin: 15px 5px;
  }
  @media (max-width: 900px) {
    font-size: ${fontSizes.titleSizeMedium};
    text-align: center;
    padding-top: 5px;
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }
`;
export const ControlButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.white};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 15px;
`;
