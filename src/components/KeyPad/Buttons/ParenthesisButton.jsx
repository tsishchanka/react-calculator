import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const ParenthesisButton = ({ handleParenthesisValue, value }) => (
  <KeypadButton onClick={e => handleParenthesisValue(e)}>{value}</KeypadButton>
);

ParenthesisButton.propTypes = {
  value: PropTypes.string,
  handleParenthesisValue: PropTypes.func,
};

export default ParenthesisButton;
