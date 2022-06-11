import React from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Select } from './styled';

const SelectButton = ({ theme, handleChangeTheme }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Select value={theme} onChange={e => handleChangeTheme(e)}>
        <option value="coloredTheme">{t('themes.colored')}</option>
        <option value="lightTheme">{t('themes.light')}</option>
        <option value="darkTheme">{t('themes.dark')}</option>
      </Select>
    </div>
  );
};

SelectButton.propTypes = {
  theme: PropTypes.string,
  handleChangeTheme: PropTypes.func,
};

export default SelectButton;
