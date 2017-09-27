import React from 'react';
import ReactDOM from 'react-dom';
import PickerRedux from './redux/pickerRedux'
import PickerState from './react-state/pickerState'
import client from '../apollo/apolloClient'
import {ApolloProvider} from 'react-apollo'
import Checkbox from 'material-ui/Checkbox/index';
import {gql} from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function AlternateRender(props) {
    return (<div>
        {props.pickerEntries.map((entry) => (
            <div key={entry.path}>
                <Checkbox checked={entry.selected} onCheck={(event,value) => props.onSelectItem(entry.path, value)}/>
                <Checkbox checked={entry.open} onCheck={(event,value) => props.onOpenItem(entry.path, value)}/>
                Alternate / displayName : {entry.node.displayName}
            </div>
        ))}
    </div>);
}

function AlternateRowRender(props) {
    return(<div> Alternate row {props.entry.name} / displayName : {props.entry.node.displayName} </div>);
}

let mount = function(target, options){

    let Picker = options.pickerType === "redux" ? PickerRedux : PickerState;
    let RenderComponent = options.alternativeRender ? AlternateRender : false;
    let RowRenderComponent = options.alternativeRowRender ? AlternateRowRender : false;
    let fragments = options.fragments ? [{
        gql:gql`fragment NodeDisplayName on JCRNode {
            displayName(language:$lang)
        }`,
        arguments: { 'lang':'String!' }
    }] : [];


    ReactDOM.render(
        <MuiThemeProvider>
        <ApolloProvider client={client} >
            <Picker rootPaths={ options.rootPaths } openableTypes={ options.openableTypes } selectableTypes={ options.selectableTypes } openPaths={ [] } id={options.id} renderComponent={ RenderComponent } rowRenderComponent={ RowRenderComponent } fragments={ fragments }
             variables={ { lang:"fr"} } />
        </ApolloProvider>
        </MuiThemeProvider>
        , target);
};

export { mount };
