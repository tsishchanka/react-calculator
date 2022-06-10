import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import SettingsPage from '../screens/SettingsPage/index';

function SettingsPageContainer() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = e => {
    setTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
    console.log('localStorage', localStorage.getItem('theme'));
  };

  return <SettingsPage theme={theme} handleChangeTheme={handleChangeTheme} />;
}
export default SettingsPageContainer;
