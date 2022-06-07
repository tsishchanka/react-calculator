/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { HistoryContext } from '../components/App/App';
import CalculatorPage from '../screens/CalculatorPage';
import * as Calculator from '../utils/index';

class ClassCalculatorPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: '0',
      formula: [],
      isCalculated: false,
    };
  }

  onDigitValue = ({ target }) => {
    const digit = target.innerText;

    if (this.state.isCalculated) {
      this.setState({
        inputData: digit,
        isCalculated: false,
      });
    } else if (this.state.inputData === '0') {
      this.setState({ inputData: digit });
    } else if (Calculator.isNotNumber(this.state.inputData)) {
      this.setState({
        inputData: digit,
        formula: this.state.formula.concat(this.state.inputData),
      });
    } else {
      this.setState({
        inputData: this.state.inputData.concat(digit),
      });
    }
  };

  onDecimalValue = ({ target }) => {
    const decimal = target.innerText;

    if (this.state.isCalculated) {
      this.setState({
        inputData: `0${decimal}`,
        isCalculated: false,
      });
    } else if (Calculator.isNotNumber(this.state.inputData)) {
      this.setState({
        inputData: `0${decimal}`,
        formula: this.state.formula.concat(this.state.inputData),
      });
    } else if (!this.state.inputData.includes(decimal)) {
      this.setState({
        inputData: this.state.inputData.concat(decimal),
      });
    }
  };

  onOperatorValue = ({ target }) => {
    const operator = target.innerText;

    if (Calculator.isOperator(this.state.inputData)) {
      this.setState({
        inputData: operator,
        isCalculated: false,
      });
    } else if (this.state.inputData !== '(') {
      this.setState({
        inputData: operator,
        formula: this.state.formula.concat(this.state.inputData),
        isCalculated: false,
      });
    }
  };

  onParenthesisValue = ({ target }) => {
    const parenthesis = target.innerText;

    if (parenthesis === '(') {
      if (
        (Calculator.isNumber(this.state.inputData) &&
          this.state.inputData !== '0') ||
        (Calculator.isNumber(this.state.inputData) &&
          this.state.inputData === '0' &&
          this.state.formula.length > 0) ||
        this.state.inputData === ')'
      ) {
        this.setState({
          inputData: parenthesis,
          formula: this.state.formula.concat([this.state.inputData, '*']),
          isCalculated: false,
        });
      } else if (
        Calculator.isOperator(this.state.inputData) ||
        this.state.inputData === '('
      ) {
        this.setState({
          inputData: parenthesis,
          formula: this.state.formula.concat(this.state.inputData),
          isCalculated: false,
        });
      } else if (
        Calculator.isNumber(this.state.inputData) &&
        this.state.inputData === '0' &&
        this.state.formula.length === 0
      ) {
        this.setState({
          inputData: parenthesis,
          isCalculated: false,
        });
      }
    } else {
      const arrayOpenParenthesis = this.state.formula.join('').match(/\(/g);
      const numOpenParenthesis = arrayOpenParenthesis
        ? arrayOpenParenthesis.length
        : 0;

      const arrayCloseParenthesis = this.state.formula.join('').match(/\)/g);
      const numCloseParenthesis = arrayCloseParenthesis
        ? arrayCloseParenthesis.length
        : 0;

      if (
        (Calculator.isNumber(this.state.inputData) ||
          this.state.inputData === ')') &&
        numOpenParenthesis > 0 &&
        numOpenParenthesis > numCloseParenthesis
      ) {
        this.setState({ inputData: parenthesis });
        this.setState({
          formula: this.state.formula.concat(this.state.inputData),
        });
        this.setState({ isCalculated: false });
      }
    }
  };

  onClearOutput = () => {
    this.setState({
      formula: [],
      inputData: '0',
      isCalculated: false,
    });
  };

  onBackspace = () => {
    const inputDataLength = this.state.inputData.length;

    if (
      this.state.inputData === 'Infinity' ||
      this.state.inputData === '-Infinity' ||
      this.state.inputData === 'NaN'
    ) {
      this.setState({ inputData: '0', isCalculated: false });
    } else if (inputDataLength > 1) {
      this.setState({
        inputData: this.state.inputData.slice(0, inputDataLength - 1),
        isCalculated: false,
      });
    } else if (this.state.inputData !== '0') {
      this.setState({ inputData: '0', isCalculated: false });
    } else if (this.state.formula.length > 0) {
      this.setState({
        inputData: this.state.formula[this.state.formula.length - 1],
        formula: this.state.formula.slice(0, this.state.formula.length - 1),
        isCalculated: false,
      });
    }
  };

  onEvaluate = () => {
    const finalFormula = this.state.formula.concat(this.state.inputData);
    const result = Calculator.evaluate(finalFormula);
    const { history } = this.context;
    if (!Number.isNaN(result)) {
      const newHistoryItem = {
        formula: finalFormula,
        result,
      };

      this.setState({
        inputData: `${result}`,
        formula: [],
        isCalculated: true,
      });
      this.context.history = [].concat(newHistoryItem, history);
    }
  };

  render() {
    return (
      <div>
        <CalculatorPage
          formula={this.state.formula}
          inputData={this.state.inputData}
          handleDigitValue={this.onDigitValue}
          handleDecimalValue={this.onDecimalValue}
          handleOperatorValue={this.onOperatorValue}
          handleParenthesisValue={this.onParenthesisValue}
          handleClearOutput={this.onClearOutput}
          handleBackspace={this.onBackspace}
          handleEvaluate={this.onEvaluate}
        />
      </div>
    );
  }
}

ClassCalculatorPageContainer.contextType = HistoryContext;

export default ClassCalculatorPageContainer;
