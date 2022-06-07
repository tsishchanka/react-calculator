/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';

import { SideBarContext } from 'screens/CalculatorPage/index';
import { HistoryContext } from '../App/App';
import { HistoryPanel, HistoryPanelTitle, HistoryPanelItem } from './styled';

// eslint-disable-next-line import/no-cycle

const History = () => {
  const { history } = useContext(HistoryContext);
  const { handleShowSideBar } = useContext(SideBarContext);

  return (
    <HistoryPanel onClick={handleShowSideBar}>
      <HistoryPanelTitle>History</HistoryPanelTitle>

      {history.map((item, index) => (
        <HistoryPanelItem key={index}>
          {item.formula.join('')}={item.result}
        </HistoryPanelItem>
      ))}
    </HistoryPanel>
  );
};

export default History;
