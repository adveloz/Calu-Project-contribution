import React from 'react';
import { useTranslation } from 'react-i18next';
import '../static/languageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-selector">
            <select 
                value={i18n.language} 
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-select"
            >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="it">Italiano</option>
            </select>
        </div>
    );
};

export default LanguageSelector; 