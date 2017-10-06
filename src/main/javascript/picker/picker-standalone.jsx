import React from 'react';
import Picker from './picker'
import {ApolloProvider} from 'react-apollo'
import client from '../apollo/apolloClient'

let PickerStandalone = function (props) {
    // const sheetsRegistry = new SheetsRegistry();

    // let muiTheme;
    // if (typeof window !== 'undefined') {
    //     muiTheme = createMuiTheme();
    // } else {
    //     muiTheme = createMuiTheme({
    //         userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    //     });
    // }

    // const jss = create(preset());
    // jss.options.createGenerateClassName = createGenerateClassName;

    // <MuiThemeProvider theme={muiTheme}>

    return (
        <ApolloProvider client={client}>
            <Picker {...props} />
        </ApolloProvider>
    )
};

export default PickerStandalone;