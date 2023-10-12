import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '/assets/languages/en.json';
import no from '/assets/languages/no.json';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            no: { translation: no }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
