import React from 'react';
import {Input, InputAdornment, withStyles } from 'material-ui';
import { Search } from 'material-ui-icons';
import {translate} from 'react-i18next';

const styles = theme => ({
    root: {
        margin: '0',
        color : 'inherit',
        backgroundColor : theme.palette.primary.light,
        width: '720px',
        height: '44px',
        lineHeight: '40px',
        borderRadius: '3px',
        fontWeight: '200'
    },
    rootFocus: {
        margin: '0',
        color: theme.palette.text.secondary,
        backgroundColor : '#fff',
        width: '720px',
        height: '44px',
        lineHeight: '40px',
        borderRadius: '3px',
        fontWeight: '100',
        boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.4)",
        // '& $input': {
        //     width: '300px'
        // }
    },
    input: {
        transitionProperty: 'width',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: '0ms',

    },
    searchIcon: {
        'marginTop': 'auto',
        'marginBottom': 'auto',
        'paddingLeft': '14px',
        'opacity': '0.87'
    }
});

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            focus: false
        }
    }

    handleChange(event) {
        // Let the handler deal with the change only when the user has paused changing the filter text for a second.
        event.persist();
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function() {
            this.props.onChangeFilter(event.target.value)
        }.bind(this), 1000);
    }

    onFocus() {
        this.setState({
            focus: true
        });
        this.props.onFocus();
    }

    onBlur() {
        this.setState({
            focus: false
        });
        this.props.onBlur();
    }

    render() {

        const { classes,t, placeholderLabel } = this.props;

        return (
            <Input classes={{root: (this.state.focus ? classes.rootFocus : classes.root), input: classes.input}}
                   onChange={this.handleChange}
                   onBlur={this.onBlur}
                   onFocus={this.onFocus}
                   disableUnderline={true}
                   type="text"
                   placeholder={placeholderLabel || t('label.searchPlaceholder')}
                   startAdornment={<InputAdornment classes={{root: classes.searchIcon}} position="start"><Search/></InputAdornment>}
            />
        )
    }
}

SearchBar = withStyles(styles)(translate('react-dxcomponents')(SearchBar));

export {SearchBar};