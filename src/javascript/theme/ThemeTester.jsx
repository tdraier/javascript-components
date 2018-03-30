import React from 'react';
import {withDxContext} from "../context";
import {Switch} from 'material-ui'
import {theme, darkTheme} from "./theme";

class ThemeTester extends React.Component {
    constructor(props) {
        super(props);
        this.switch = this.switch.bind(this);

        this.themes = [theme, darkTheme];
        this.state = {
            checked:false
        };
    }

    switch() {
        this.setState((previous) => {
            this.props.dxContext.setTheme(previous.checked ? theme : darkTheme);
            return {
                checked: !previous.checked
            }
        });
    }


    render() {
        return <Switch color="default" onChange={this.switch} checked={this.state.checked}/>
    }

}


ThemeTester = withDxContext()(ThemeTester);

export {ThemeTester}