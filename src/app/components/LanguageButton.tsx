import React from 'react';
import buttonStyles from '../styles/Button.module.css';

type LanguageType = 'pt' | 'en';

interface LanguageButtonProps {
  currentLanguage: LanguageType;
  onLanguageChange: () => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <button 
      onClick={onLanguageChange}
      className={buttonStyles.languageButton}
      aria-label={`Switch to ${currentLanguage === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <div className={`${buttonStyles.languageButtonInner} ${
        currentLanguage === 'pt' 
          ? buttonStyles.languageButtonBr 
          : buttonStyles.languageButtonEn
      }`}>
        {currentLanguage === 'pt' ? 'BR' : 'EN'}
      </div>
    </button>
  );
};

export default LanguageButton;