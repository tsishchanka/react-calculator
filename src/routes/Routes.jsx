import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../constants/routeNames';
import CalculatorPageContainer from '../containers/CalculatorPageContainer';
// import ClassCalculatorPageContainer from '@/containers/ClassCalculatorPageContainer'
import SettingsPageContainer from '../containers/SettingsPageContainer';
// import ClassSettingsPageContainer from '@/containers/ClassSettingsPageContainer'

const RoutesComponent = () => (
  <div>
    <Routes>
      <Route exact path={ROUTES.HOME} element={<CalculatorPageContainer />} />

      <Route path={ROUTES.SETTINGS_PAGE} element={<SettingsPageContainer />} />
    </Routes>
  </div>
);

export default RoutesComponent;
