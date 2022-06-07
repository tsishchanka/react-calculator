import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1820px;
  padding: 10px 0 10px 36px;
  background-color: ${props => props.theme.white};
  @media (max-width: 1250px) {
    width: 1200px;
    padding: 18px 0;
  }
  @media (max-width: 800px) {
    width: 750px;
    padding: 18px 0;
  }
`;

export const MainPanel = styled.div`
  width: ${props => props.width};
  display: flex;
  padding-right: 18px;
  margin: 0 30px;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  @media (max-width: 1250px) {
    width: 600px;
    padding: 0;
  }
`;
