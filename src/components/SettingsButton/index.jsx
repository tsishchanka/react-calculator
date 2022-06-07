/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';

import { HistoryContext } from '../App/App';
import { StyledSettingsButton } from './styled';

const SettingsButtons = () => {
  const { handleClearHistory } = useContext(HistoryContext);
  return (
    <div onClick={handleClearHistory}>
      <StyledSettingsButton>Clear All History</StyledSettingsButton>
    </div>
  );
};

export default SettingsButtons;
