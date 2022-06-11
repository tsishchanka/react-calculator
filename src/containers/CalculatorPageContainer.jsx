/* eslint-disable import/order */
import React, { useState, useContext, useLayoutEffect } from 'react';

import { HistoryContext } from 'components/App/App';
import { isNotNumber, isNumber, isOperator } from 'constants/formulaValues';

import * as Calculator from 'helpers/evaluate';
import CalculatorPage from 'screens/CalculatorPage/index';

function CalculatorPageContainer() {
  const [inputData, setInputData] = useState('0');
  const [formula, setFormula] = useState([]);
  const [isCalculated, setIsCalculated] = useState(false);
  const { history, setHistory } = useContext(HistoryContext);

  const currentHistory = () => {
    if (localStorage.getItem('history') !== null) {
      return JSON.parse(localStorage.getItem(history));
    }
    return localStorage.setItem('history', JSON.stringify(history));
  };

  useLayoutEffect(() => {
    setHistory(currentHistory);
  }, []);

  const handleDigitValue = ({ target }) => {
    const digit = target.innerText;

    if (isCalculated) {
      setInputData(digit);
      setIsCalculated(false);
    } else if (inputData === '0') {
      setInputData(digit);
    } else if (isNotNumber(inputData)) {
      setInputData(digit);
      setFormula(formula.concat(inputData));
    } else {
      setInputData(inputData.concat(digit));
    }
  };

  const handleDecimalValue = ({ target }) => {
    const decimal = target.innerText;
    console.log('inputData', inputData);
    console.log('target.innerText', target.innerText);
    if (isCalculated) {
      setInputData(`0${decimal}`);
      setIsCalculated(false);
    } else if (isNotNumber(inputData)) {
      setInputData(`0${decimal}`);
      setFormula(formula.concat(inputData));
    } else if (!inputData.includes(decimal)) {
      setInputData(inputData.concat(decimal));
    }
  };

  const handleSighChange = () => {
    if (inputData !== '0' && inputData.match(/[0-9]/)) {
      if (
        !inputData.includes('-') &&
        !inputData.includes('+') &&
        +inputData > 0
      ) {
        setInputData(`-${inputData}`);
      } else if (!inputData.includes('+') && !inputData.includes('-')) {
        setInputData(`+${inputData}`);
      } else if (inputData.includes('+')) {
        setInputData(`-${inputData.slice(1)}`);
      } else if (inputData.includes('-')) {
        setInputData(`+${inputData.slice(1)}`);
      }
      console.log('handleSighChange');
    }
    return inputData;
  };

  const handleOperatorValue = ({ target }) => {
    const operator = target.innerText;
    if (isOperator(inputData)) {
      setInputData(operator);
      setIsCalculated(false);
    } else if (inputData !== '(') {
      setInputData(operator);
      setFormula(formula.concat(inputData));
      setIsCalculated(false);
    }
  };

  const handleParenthesisValue = ({ target }) => {
    const parenthesis = target.innerText;
    if (parenthesis === '(') {
      if (
        (isNumber(inputData) && inputData !== '0') ||
        (isNumber(inputData) && inputData === '0' && formula.length > 0) ||
        inputData === ')'
      ) {
        setInputData(parenthesis);
        setFormula(formula.concat([inputData, '*']));
        setIsCalculated(false);
      } else if (isOperator(inputData) || inputData === '(') {
        setInputData(parenthesis);
        setFormula(formula.concat(inputData));
        setIsCalculated(false);
      } else if (
        isNumber(inputData) &&
        inputData === '0' &&
        formula.length === 0
      ) {
        setInputData(parenthesis);
        setIsCalculated(false);
      }
    } else {
      const arrayOpenParenthesis = formula.join('').match(/\(/g);
      const numOpenParenthesis = arrayOpenParenthesis
        ? arrayOpenParenthesis.length
        : 0;

      const arrayCloseParenthesis = formula.join('').match(/\)/g);
      const numCloseParenthesis = arrayCloseParenthesis
        ? arrayCloseParenthesis.length
        : 0;

      if (
        (isNumber(inputData) || inputData === ')') &&
        numOpenParenthesis > 0 &&
        numOpenParenthesis > numCloseParenthesis
      ) {
        setInputData(parenthesis);
        setFormula(formula.concat(inputData));
        setIsCalculated(false);
      }
    }
  };

  const handleClearOutput = () => {
    setFormula([]);
    setInputData('0');
    setIsCalculated(false);
  };

  const handleBackspace = () => {
    const inputDataLength = inputData.length;
    if (
      inputData === 'Infinity' ||
      inputData === '-Infinity' ||
      inputData === 'NaN'
    ) {
      setInputData('0');
      setIsCalculated(false);
    } else if (inputDataLength > 1) {
      setInputData(inputData.slice(0, inputDataLength - 1));
      setIsCalculated(false);
    } else if (inputData !== '0') {
      setInputData('0');
      setIsCalculated(false);
    } else if (formula.length > 0) {
      setInputData(formula[formula.length - 1]);
      setFormula(formula.slice(0, formula.length - 1));
      setIsCalculated(false);
    }
  };

  const handleEvaluate = () => {
    console.log('Evaluate');
    const finalFormula = formula.concat(inputData);
    const result = Calculator.evaluate(finalFormula);
    const newHistoryItem = {
      formula: finalFormula,
      result,
    };
    if (!Number.isNaN(result)) {
      const newHistory = [].concat(newHistoryItem, history);
      setInputData(`${result}`);
      setFormula([]);
      setHistory(newHistory);
      setIsCalculated(true);
      localStorage.setItem('history', JSON.stringify(newHistory));
    }
  };

  return (
    <div>
      <CalculatorPage
        formula={formula}
        inputData={inputData}
        handleDigitValue={handleDigitValue}
        handleDecimalValue={handleDecimalValue}
        handleOperatorValue={handleOperatorValue}
        handleParenthesisValue={handleParenthesisValue}
        handleClearOutput={handleClearOutput}
        handleBackspace={handleBackspace}
        handleEvaluate={handleEvaluate}
        handleSighChange={handleSighChange}
      />
    </div>
  );
}
export default CalculatorPageContainer;
