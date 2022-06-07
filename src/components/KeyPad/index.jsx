/* eslint-disable import/order */
import React from 'react';

import PropTypes from 'prop-types';

import { buttonValues } from 'constants/buttonValues';
import {
  OperatorButton,
  ValueButton,
  ComputeButton,
  ClearOutputButton,
  DecimalButton,
  ParenthesisButton,
  BackspaceButton,
} from './Buttons/index';
import { Grid } from './styled';

const KeyPad = ({
  handleDigitValue,
  handleDecimalValue,
  handleOperatorValue,
  handleParenthesisValue,
  handleClearOutput,
  handleBackspace,
  handleEvaluate,
}) => (
  <Grid>
    {buttonValues.map(
      buttonValue =>
        (buttonValue.name === '(' && (
          <ParenthesisButton
            key={buttonValue.id}
            value={buttonValue.name}
            handleParenthesisValue={handleParenthesisValue}
          />
        )) ||
        (buttonValue.name === ')' && (
          <ParenthesisButton
            key={buttonValue.id}
            value={buttonValue.name}
            handleParenthesisValue={handleParenthesisValue}
          />
        )) ||
        (buttonValue.name === '.' && (
          <DecimalButton
            key={buttonValue.id}
            value={buttonValue.name}
            handleDecimalValue={handleDecimalValue}
          />
        )) ||
        (buttonValue.name === 'C' && (
          <ClearOutputButton
            key={buttonValue.id}
            output={buttonValue.name}
            handleClearOutput={handleClearOutput}
          />
        )) ||
        (buttonValue.name === 'CE' && (
          <BackspaceButton
            key={buttonValue.id}
            value={buttonValue.name}
            handleBackspace={handleBackspace}
          />
        )) ||
        (buttonValue.name === '=' && (
          <ComputeButton
            key={buttonValue.id}
            output={buttonValue.name}
            handleEvaluate={handleEvaluate}
          />
        )) ||
        (buttonValue.name.match(/[^\w]/) && (
          <OperatorButton
            key={buttonValue.id}
            operator={buttonValue.name}
            handleOperatorValue={handleOperatorValue}
          />
        )) ||
        (buttonValue.name.match(/[0-9]/) && (
          <ValueButton
            key={buttonValue.id}
            value={buttonValue.name}
            handleDigitValue={handleDigitValue}
          />
        )),
    )}
  </Grid>
);

KeyPad.propTypes = {
  handleDigitValue: PropTypes.func,
  handleDecimalValue: PropTypes.func,
  handleOperatorValue: PropTypes.func,
  handleParenthesisValue: PropTypes.func,
  handleClearOutput: PropTypes.func,
  handleBackspace: PropTypes.func,
  handleEvaluate: PropTypes.func,
};

export default KeyPad;
