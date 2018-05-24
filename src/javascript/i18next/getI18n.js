import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import ChainedBackend from 'i18next-chained-backend';

import * as _ from 'lodash';

function getI18n(options) {

    let backends = [ XHR ];
    let backendOptions = [ {
        loadPath: (options.contextPath ? options.contextPath : '') + '/modules/{{ns}}/javascript/locales/{{lng}}.json'
    }];

    if (options['getData']) {
        let getData = options['getData'];
        backends.splice(0,0,XHR);
        backendOptions.splice(0,0,
            {
                loadPath: "{{ns}}/{{lng}}",
                ajax:(url, options, callback, data) => {
                    let [ns,lang] = url.split('/');
                    let value = getData(ns,lang);
                    if (value) {
                        callback(JSON.stringify(value), {status: 200});
                    } else {
                        callback(null, {status:400});
                    }
                }
            }
        )
    }

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
            backends: backends,
            backendOptions: backendOptions
        }
    };

    options = _.merge(defaults, options);

    i18n
        .use(ChainedBackend)
        .init(options);
    return i18n;
}


export { getI18n };