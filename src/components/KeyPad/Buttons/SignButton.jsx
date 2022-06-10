import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const OperatorButton = ({ operator, handleSighChange }) => (
  <KeypadButton onClick={handleSighChange}>{operator}</KeypadButton>
);

OperatorButton.propTypes = {
  operator: PropTypes.string,
  handleSighChange: PropTypes.func,
};

export default OperatorButton;
