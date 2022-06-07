import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import SettingsPage from '../screens/SettingsPage/index';

function SettingsPageContainer() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = e => setTheme(e.target.value);
  return <SettingsPage theme={theme} handleChangeTheme={handleChangeTheme} />;
}
export default SettingsPageContainer;
