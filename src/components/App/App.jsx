/* eslint-disable import/order */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useLayoutEffect } from 'react';

import PropTypes from 'prop-types';

import { ThemeContext, ThemeProvider } from 'styled-components';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { darkTheme, lightTheme, coloredTheme } from 'theme';

import Header from '../Header';
import { MainContainer } from './styled';

export const HistoryContext = React.createContext();
const App = ({ children }) => {
  const [theme, setTheme] = useState('coloredTheme');
  const [history, setHistory] = useState([]);

  useLayoutEffect(() => {
    if (localStorage.getItem('theme').length !== 0) {
      const currentTheme = localStorage.getItem('theme');
      setTheme(currentTheme);
    }
  }, []);

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider
          theme={
            (theme === 'lightTheme' && { ...lightTheme }) ||
            (theme === 'darkTheme' && { ...darkTheme }) ||
            (theme === 'coloredTheme' && {
              ...coloredTheme,
            })
          }
        >
          <MainContainer>
            <HistoryContext.Provider
              value={{ history, setHistory, handleClearHistory }}
            >
              <Header />
              <div>{children}</div>
            </HistoryContext.Provider>
          </MainContainer>
        </ThemeProvider>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default App;
