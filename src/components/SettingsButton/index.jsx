/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';

import { HistoryContext } from '../App/App';
import { StyledSettingsButton } from './styled';

const SettingsButtons = () => {
  const { history, setHistory } = useContext(HistoryContext);
  const { t } = useTranslation();

  const handleClearHistory = () => {
    if (history.length > 0) {
      localStorage.removeItem('history');
      setHistory([]);
    }
  };

  return (
    <div onClick={handleClearHistory}>
      <StyledSettingsButton>{t('clear_history')}</StyledSettingsButton>
    </div>
  );
};

export default SettingsButtons;
