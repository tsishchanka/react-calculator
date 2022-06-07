import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const ComputeButton = ({ handleEvaluate, output }) => (
  <KeypadButton onClick={handleEvaluate}>{output}</KeypadButton>
);

ComputeButton.propTypes = {
  output: PropTypes.string,
  handleEvaluate: PropTypes.func,
};

export default ComputeButton;
