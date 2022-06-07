import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const ValueButton = ({ handleDigitValue, value }) => (
  <KeypadButton onClick={e => handleDigitValue(e)}>{value}</KeypadButton>
);

ValueButton.propTypes = {
  value: PropTypes.string,
  handleDigitValue: PropTypes.func,
};

export default ValueButton;
