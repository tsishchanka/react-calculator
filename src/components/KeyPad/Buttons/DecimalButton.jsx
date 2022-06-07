import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const DecimalButton = ({ handleDecimalValue, value }) => (
  <KeypadButton onClick={e => handleDecimalValue(e)}>{value}</KeypadButton>
);

DecimalButton.propTypes = {
  value: PropTypes.string,
  handleDecimalValue: PropTypes.func,
};

export default DecimalButton;
