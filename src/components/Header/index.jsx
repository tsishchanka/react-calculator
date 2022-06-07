import React, { useState } from 'react';

import { ROUTES } from 'constants/routeNames';

import { HeaderTitle, StyledButton, HeaderWrapper, StyledLink } from './styled';

const Header = () => {
  const [active, setActive] = useState('Home');
  const handleSelect = e => {
    setActive(e.target.innerText);
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>Calculator App</HeaderTitle>
      <StyledButton onClick={e => handleSelect(e)}>
        <StyledLink
          to={ROUTES.HOME}
          color={active === 'Home' ? '#ffffff' : '#919191'}
        >
          <p>Home</p>
        </StyledLink>
      </StyledButton>
      <StyledButton onClick={e => handleSelect(e)}>
        <StyledLink
          to={ROUTES.SETTINGS_PAGE}
          color={active === 'Settings' ? '#ffffff' : '#919191'}
        >
          <p>Settings</p>
        </StyledLink>
      </StyledButton>
    </HeaderWrapper>
  );
};

export default Header;
