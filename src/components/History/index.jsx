/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { SideBarContext } from 'screens/CalculatorPage/index';

import { HistoryContext } from '../App/App';
import { HistoryPanel, HistoryPanelTitle, HistoryPanelItem } from './styled';

// eslint-disable-next-line import/no-cycle

const History = () => {
  const { history, setHistory } = useContext(HistoryContext);
  const { handleShowSideBar } = useContext(SideBarContext);

  useEffect(() => {
    setHistory(history);
  }, []);

  console.log('history in map', history);
  const { t } = useTranslation();

  return (
    <HistoryPanel onClick={handleShowSideBar}>
      <HistoryPanelTitle>{t('history_title')}</HistoryPanelTitle>

      {history &&
        history.map((item, index) => (
          <HistoryPanelItem key={index}>
            {console.log('item', item.formula)}
            {item.formula.join('')}={item.result}
          </HistoryPanelItem>
        ))}
    </HistoryPanel>
  );
};

export default History;
