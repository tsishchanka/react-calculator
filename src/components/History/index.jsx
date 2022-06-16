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

  const currentHistory = () => {
    if (localStorage.getItem('history') !== null) {
      return JSON.parse(localStorage.getItem('history'));
    }
    return localStorage.setItem('history', JSON.stringify(history));
  };

  useEffect(() => {
    setHistory(currentHistory);
  }, []);

  const { t } = useTranslation();

  return (
    <HistoryPanel onClick={handleShowSideBar}>
      <HistoryPanelTitle>{t('history_title')}</HistoryPanelTitle>

      {history &&
        history.map((item, index) => (
          <HistoryPanelItem key={index}>
            {item.formula.join('')}={item.result}
          </HistoryPanelItem>
        ))}
    </HistoryPanel>
  );
};

export default History;
