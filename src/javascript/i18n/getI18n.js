import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector/';
import { reactI18nextModule } from 'react-i18next';

function getI18n(options) {
    options = options || {};
    i18n
        .use(XHR)
        // .use(LanguageDetector)
        // .use(reactI18nextModule) // if not using I18nextProvider
        .init({
            lng: (options.currentLanguage ? options.currentLanguage : undefined),
            fallbackLng: 'en',
            debug: true,

            interpolation: {
                escapeValue: false, // not needed for react!!
            },

            // react i18next special options (optional)
            react: {
                wait: false,
                bindI18n: 'languageChanged loaded',
                bindStore: 'added removed',
                nsMode: 'default'
            },

            backend: {
                loadPath: (options.contextPath ? options.contextPath : '') + '/modules/{{ns}}/javascript/locales/{{lng}}.json',
            }
        });
    return i18n;
}


export { getI18n };