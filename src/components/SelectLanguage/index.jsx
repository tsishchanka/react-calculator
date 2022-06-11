import React from 'react';

import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = language => {
    console.log('language', language);
    i18n.changeLanguage(language);
    localStorage.setItem('locale', language);
  };
  return (
    <div>
      <button type="button" onClick={() => handleChangeLanguage('en')}>
        EN
      </button>
      <button type="button" onClick={() => handleChangeLanguage('ru')}>
        RU
      </button>
    </div>
  );
};

export default SelectLanguage;
