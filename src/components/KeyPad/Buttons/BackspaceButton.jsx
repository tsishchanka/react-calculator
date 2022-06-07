import React from 'react';

import PropTypes from 'prop-types';

import { KeypadButton } from '../styled';

const BackspaceButton = ({ handleBackspace, value }) => (
  <KeypadButton onClick={handleBackspace}>{value}</KeypadButton>
);

BackspaceButton.propTypes = {
  value: PropTypes.string,
  handleBackspace: PropTypes.func,
};

export default BackspaceButton;
