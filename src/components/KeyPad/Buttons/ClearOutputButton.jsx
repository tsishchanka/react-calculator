import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const ClearOutputButton = ({ handleClearOutput, output }) => (
  <KeypadButton onClick={handleClearOutput}>{output}</KeypadButton>
);

ClearOutputButton.propTypes = {
  output: PropTypes.string,
  handleClearOutput: PropTypes.func,
};

export default ClearOutputButton;
