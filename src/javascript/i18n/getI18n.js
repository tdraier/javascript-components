import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

import * as _ from 'lodash';

function getI18n(options) {
    let defaults = {
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        // react i18next special options (optional)
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },

        backend: {
            loadPath: (options.contextPath ? options.contextPath : '') + '/modules/{{ns}}/javascript/locales/{{lng}}.json',
        }
    };

    options = _.merge(defaults, options);

    i18n
        .use(XHR)
        .init(options);
    return i18n;
}


export { getI18n };