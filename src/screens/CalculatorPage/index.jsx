/* eslint-disable import/order */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React, { useState, useMemo } from 'react';

import PropTypes from 'prop-types';

import ControlPanel from 'components/ControlPanel/index';
import Display from 'components/Display/index';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import KeyPad from 'components/KeyPad/index';

import { CalculatorWrapper, MainPanel } from './styled';

export const SideBarContext = React.createContext();

const CalculatorPage = ({
  formula,
  inputData,
  handleDigitValue,
  handleDecimalValue,
  handleOperatorValue,
  handleParenthesisValue,
  handleClearOutput,
  handleBackspace,
  handleEvaluate,
  handleSighChange,
}) => {
  const [sideBar, setSideBar] = useState(false);

  const isSideBarOpen = useMemo(
    () => ({
      sideBar,
      setSideBar,
    }),
    [sideBar],
  );
  return (
    <ErrorBoundary>
      <SideBarContext.Provider value={{ isSideBarOpen }}>
        <CalculatorWrapper>
          <MainPanel width={sideBar && '65vw'}>
            <Display formula={formula} inputData={inputData} />
            <KeyPad
              handleDigitValue={handleDigitValue}
              handleDecimalValue={handleDecimalValue}
              handleOperatorValue={handleOperatorValue}
              handleParenthesisValue={handleParenthesisValue}
              handleClearOutput={handleClearOutput}
              handleBackspace={handleBackspace}
              handleEvaluate={handleEvaluate}
              handleSighChange={handleSighChange}
            />
          </MainPanel>
          <ControlPanel />
        </CalculatorWrapper>
      </SideBarContext.Provider>
    </ErrorBoundary>
  );
};

CalculatorPage.propTypes = {
  formula: PropTypes.arrayOf(PropTypes.string),
  inputData: PropTypes.string,
  handleDigitValue: PropTypes.func,
  handleDecimalValue: PropTypes.func,
  handleOperatorValue: PropTypes.func,
  handleParenthesisValue: PropTypes.func,
  handleClearOutput: PropTypes.func,
  handleBackspace: PropTypes.func,
  handleEvaluate: PropTypes.func,
  handleSighChange: PropTypes.func,
};

export default CalculatorPage;
