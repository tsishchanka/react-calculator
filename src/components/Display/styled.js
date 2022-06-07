import styled from 'styled-components';

import { fontSizes } from '../../theme';

export const DisplayForm = styled.div`
  border-bottom: 1px solid ${props => props.theme.black};
  max-width: 1440px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
`;
export const DisplayFormulaPanel = styled.input`
  font-size: ${fontSizes.titleSizeMedium};
  background-color: ${props => props.theme.white};
  border: none;
  outline: none;
  align-items: bottom;
  text-align: right;
`;

export const DisplayPanel = styled.input`
  font-size: ${fontSizes.nameKeySize};
  height: 100px;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  border: none;
  outline: none;
  align-items: bottom;
  text-align: right;
  @media (max-width: 1250px) {
    font-size: ${fontSizes.displayInfoSize};
  }
  @media (max-width: 900px) {
    font-size: ${fontSizes.displayInfoSmallSize};
  }
`;
