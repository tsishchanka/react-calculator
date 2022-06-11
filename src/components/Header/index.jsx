import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

// eslint-disable-next-line import/order
import { ROUTES } from 'constants/routeNames';
import { HeaderTitle, StyledButton, HeaderWrapper, StyledLink } from './styled';

const Header = () => {
  const [active, setActive] = useState('Home');

  const { t } = useTranslation();

  const handleSelect = e => {
    setActive(e.target.innerText);
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>{t('title')}</HeaderTitle>
      <StyledButton onClick={e => handleSelect(e)}>
        <StyledLink
          to={ROUTES.HOME}
          color={active === `${t('pages.home')}` ? '#ffffff' : '#919191'}
        >
          <p>{t('pages.home')}</p>
        </StyledLink>
      </StyledButton>
      <StyledButton onClick={e => handleSelect(e)}>
        <StyledLink
          to={ROUTES.SETTINGS_PAGE}
          color={active === `${t('pages.settings')}` ? '#ffffff' : '#919191'}
        >
          <p>{t('pages.settings')}</p>
        </StyledLink>
      </StyledButton>
    </HeaderWrapper>
  );
};

export default Header;
