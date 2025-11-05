import { useEffect, useState } from "react";

type LanguageType = 'pt' | 'en';

export default function useLanguage() {
    const [language, setLanguage] = useState<LanguageType>('en');

    useEffect(() => {
        if (typeof window !== 'undefined' && navigator.language) {
            if (navigator.language.includes('pt')) {
                setLanguage('pt');
            } else {
                setLanguage('en');
            }
        } else {
            setLanguage('en');
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
    }



    return { language, setLanguage, toggleLanguage };
}