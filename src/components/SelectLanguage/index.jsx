import React from 'react';

import PropTypes from 'prop-types';

import { Select } from '../SelectButton/styled';

const SelectLanguage = ({ language, onChange }) => (
  <div>
    <Select name={language} onChange={onChange}>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </Select>
  </div>
);

SelectLanguage.propTypes = {
  language: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectLanguage;
