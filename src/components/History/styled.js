import styled from 'styled-components';

import { fontSizes } from 'theme';

export const HistoryPanel = styled.div`
  display: flex;
  padding-left: 37px;
  max-width: 380px;
  flex-direction: column;
  background-color: ${props => props.theme.white};
  @media (max-width: 1250px) {
    max-width: 200px;
    padding-left: 37px;
  }
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const HistoryPanelTitle = styled.h1`
  font-size: ${fontSizes.titleSize};
  font-weight: normal;
  padding-left: 50px;
  @media (max-width: 1250px) {
    font-size: ${fontSizes.titleSizeMedium};
    padding-left: 10px;
  }
  @media (max-width: 800px) {
    font-size: ${fontSizes.titleSizeSmall};
    max-width: 100px;
  }
`;
export const HistoryPanelItem = styled.p`
  font-size: ${fontSizes.titleSizeSmall};
  line-break: anywhere;
  @media (max-width: 800px) {
    font-size: ${fontSizes.titleSizeMedium};
    max-width: 100px;
  }
`;
