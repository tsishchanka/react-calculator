import styled from 'styled-components';

import { fontSizes } from '../../theme';

export const Select = styled.select`
  width: 400px;
  height: 95px;
  border-radius: 8px;
  padding: 30px;
  margin: 30px 60px;
  font-size: ${fontSizes.titleSize};
  cursor: pointer;
  border: 1px solid ${props => props.theme.black};
  background-color: ${props => props.theme.calculatorButton};
  appearance: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.black};
    transition: 0.3s ease-in-out;
    option {
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
      border-radius: 40px;
    }
  }
  &:not([multiple]) {
    background-repeat: no-repeat;
    background-position: calc(100% - 35px) 35px;
    background-size: 28px auto;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpath d='M70.3 13.8L40 66.3 9.7 13.8z' fill='%23000'%3E%3C/path%3E%3C/svg%3E");
  }
`;
