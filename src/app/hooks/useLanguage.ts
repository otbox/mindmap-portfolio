import { useEffect, useState } from "react";


export default function useLanguage() {
    type LanguageType = 'pt' | 'en';
    const [language, setLanguage] = useState<LanguageType>();

    useEffect(() => {
          if (typeof window !== 'undefined') {
    const userLang = navigator.language;
            setLanguage('pt');
        } else {
            setLanguage('en');
        }
    }, [])

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
    }



    return { language, setLanguage, toggleLanguage };
}