import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import GlobalStyles from './globalStyles';
import RoutesComponent from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <RoutesComponent />
      </App>

      <GlobalStyles />
    </BrowserRouter>
  </React.StrictMode>,
);
