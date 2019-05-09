import React from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

class LanguageSwitcher extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            anchorEl: null
        };
    }

    handleClick(event) {
        this.setState({anchorEl: event.target});
    }

    handleClose(lang) {
        this.setState({anchorEl: null});
        if (lang) {
            this.context.i18n.changeLanguage(lang);
        }
    }

    render() {
        let availableLocales = ['fr', 'en'];

        return (
            <React.Fragment>
                <Button onClick={this.handleClick.bind(this)}>{this.props.t('label.languages')}</Button>
                <Menu open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose.bind(this, null)}
                      anchorEl={this.state.anchorEl}
                >
                    {availableLocales.map(locale => (
                        <MenuItem key={locale}
                                  onClick={this.handleClose.bind(this, locale)}
                                  value={locale}
                        >{locale}
                        </MenuItem>
))}
                </Menu>
            </React.Fragment>
        );
    }
}

LanguageSwitcher.contextTypes = {
    i18n: PropTypes.object
};

LanguageSwitcher = translate('react-material')(LanguageSwitcher);

export {LanguageSwitcher};
