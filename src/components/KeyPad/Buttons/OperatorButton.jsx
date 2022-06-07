import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const OperatorButton = ({ operator, handleOperatorValue }) => (
  <KeypadButton onClick={e => handleOperatorValue(e)}>{operator}</KeypadButton>
);

OperatorButton.propTypes = {
  operator: PropTypes.string,
  handleOperatorValue: PropTypes.func,
};

export default OperatorButton;
