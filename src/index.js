import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
import RoutesComponent from './components/Routes/Routes';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App>
          <RoutesComponent />
        </App>

        <GlobalStyles />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
