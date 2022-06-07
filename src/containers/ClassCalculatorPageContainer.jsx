import React from 'react';

import { HistoryContext } from '../components/App/App';

import { isNotNumber, isNumber, isOperator } from 'constants/formulaValues';

import * as Calculator from '../helpers/evaluate';
import CalculatorPage from '../screens/CalculatorPage/index';

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
    } else if (isNotNumber(this.state.inputData)) {
      this.setState(prevState => ({
        inputData: digit,
        formula: prevState.formula.concat(prevState.inputData),
      }));
    } else {
      this.setState(prevState => ({
        inputData: prevState.inputData.concat(digit),
      }));
    }
  };

  onDecimalValue = ({ target }) => {
    const decimal = target.innerText;

    if (this.state.isCalculated) {
      this.setState({
        inputData: `0${decimal}`,
        isCalculated: false,
      });
    } else if (isNotNumber(this.state.inputData)) {
      this.setState(prevState => ({
        inputData: `0${decimal}`,
        formula: prevState.formula.concat(prevState.inputData),
      }));
    } else if (!this.state.inputData.includes(decimal)) {
      this.setState(prevState => ({
        inputData: prevState.inputData.concat(decimal),
      }));
    }
  };

  onOperatorValue = ({ target }) => {
    const operator = target.innerText;

    if (isOperator(this.state.inputData)) {
      this.setState({
        inputData: operator,
        isCalculated: false,
      });
    } else if (this.state.inputData !== '(') {
      this.setState(prevState => ({
        inputData: operator,
        formula: prevState.formula.concat(prevState.inputData),
        isCalculated: false,
      }));
    }
  };

  onParenthesisValue = ({ target }) => {
    const parenthesis = target.innerText;

    if (parenthesis === '(') {
      if (
        (isNumber(this.state.inputData) && this.state.inputData !== '0') ||
        (isNumber(this.state.inputData) &&
          this.state.inputData === '0' &&
          this.state.formula.length > 0) ||
        this.state.inputData === ')'
      ) {
        this.setState(prevState => ({
          inputData: parenthesis,
          formula: prevState.formula.concat([prevState.inputData, '*']),
          isCalculated: false,
        }));
      } else if (
        isOperator(this.state.inputData) ||
        this.state.inputData === '('
      ) {
        this.setState(prevState => ({
          inputData: parenthesis,
          formula: prevState.formula.concat(prevState.inputData),
          isCalculated: false,
        }));
      } else if (
        isNumber(this.state.inputData) &&
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
        (isNumber(this.state.inputData) || this.state.inputData === ')') &&
        numOpenParenthesis > 0 &&
        numOpenParenthesis > numCloseParenthesis
      ) {
        this.setState({ inputData: parenthesis });
        this.setState(prevState => ({
          formula: prevState.formula.concat(prevState.inputData),
        }));
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
      this.setState(prevState => ({
        inputData: prevState.inputData.slice(0, inputDataLength - 1),
        isCalculated: false,
      }));
    } else if (this.state.inputData !== '0') {
      this.setState({ inputData: '0', isCalculated: false });
    } else if (this.state.formula.length > 0) {
      this.setState(prevState => ({
        inputData: prevState.formula[prevState.formula.length - 1],
        formula: prevState.formula.slice(0, prevState.formula.length - 1),
        isCalculated: false,
      }));
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
