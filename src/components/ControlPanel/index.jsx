/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';

import { SideBarContext } from 'screens/CalculatorPage/index';

import History from '../History/index';
import { ControlPanelWrapper, Toggler } from './styled';

const ControlPanel = () => {
  const { isSideBarOpen } = useContext(SideBarContext);
  console.log('isSideBarOpen', isSideBarOpen);
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
