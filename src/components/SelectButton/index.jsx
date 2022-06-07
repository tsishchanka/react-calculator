import React from 'react';

import PropTypes from 'prop-types';

import { Select } from './styled';

const SelectButton = ({ theme, handleChangeTheme }) => (
  <div>
    <Select value={theme} onChange={e => handleChangeTheme(e)}>
      <option value="coloredTheme">Colored Theme</option>
      <option value="lightTheme">Light Theme</option>
      <option value="darkTheme">Dark Theme</option>
    </Select>
  </div>
);

SelectButton.propTypes = {
  theme: PropTypes.string,
  handleChangeTheme: PropTypes.func,
};

export default SelectButton;
