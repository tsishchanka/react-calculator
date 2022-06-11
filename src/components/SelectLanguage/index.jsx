import React from 'react';

import { useTranslation } from 'react-i18next';

import { LanguageButton } from './styled';

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = language => {
    console.log('language', language);
    i18n.changeLanguage(language);
    localStorage.setItem('locale', language);
  };
  return (
    <div>
      <LanguageButton type="button" onClick={() => handleChangeLanguage('en')}>
        EN
      </LanguageButton>
      <LanguageButton type="button" onClick={() => handleChangeLanguage('ru')}>
        RU
      </LanguageButton>
    </div>
  );
};

export default SelectLanguage;
