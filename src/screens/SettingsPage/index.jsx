import React from 'react';

// eslint-disable-next-line import/order
import PropTypes from 'prop-types';

import SelectButton from 'components/SelectButton/index';
import SettingsButtons from 'components/SettingsButton/index';

import { SettingsWrapper } from './styled';

const SettingsPage = ({ theme, handleChangeTheme }) => (
  <SettingsWrapper theme={theme} handleChangeTheme={handleChangeTheme}>
    <SelectButton theme={theme} handleChangeTheme={handleChangeTheme} />
    <SettingsButtons> Clear All History</SettingsButtons>
  </SettingsWrapper>
);

SettingsPage.propTypes = {
  theme: PropTypes.string,
  handleChangeTheme: PropTypes.func,
};

export default SettingsPage;
