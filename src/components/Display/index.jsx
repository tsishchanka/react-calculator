import React from 'react';

import PropTypes from 'prop-types';

import { DisplayForm, DisplayFormulaPanel, DisplayPanel } from './styled';

const Display = ({ formula, inputData }) => (
  <DisplayForm>
    <DisplayFormulaPanel value={formula.join('')} readOnly id="formula" />
    <DisplayPanel
      value={
        inputData === 'Infinity' ||
        inputData === '-Infinity' ||
        inputData === 'NaN'
          ? 'Error'
          : inputData
      }
      readOnly
      id="current-value"
    />
  </DisplayForm>
);

Display.propTypes = {
  formula: PropTypes.arrayOf(PropTypes.string),
  inputData: PropTypes.string,
};

export default Display;
