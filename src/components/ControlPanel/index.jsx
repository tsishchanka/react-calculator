/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';

import { SideBarContext } from 'screens/CalculatorPage';

import History from '../History';
import { ControlPanelWrapper, Toggler } from './styled';

const ControlPanel = () => {
  const { isSideBarOpen } = useContext(SideBarContext);

  const handleShowSideBar = () =>
    isSideBarOpen.setSideBar(!isSideBarOpen.sideBar);
  return (
    <ControlPanelWrapper
      width={isSideBarOpen.sideBar ? '5vw' : '30vw'}
      onClick={handleShowSideBar}
    >
      <Toggler />

      {!isSideBarOpen.sideBar && (
        <History onClick={isSideBarOpen.handleShowSideBar} />
      )}
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
