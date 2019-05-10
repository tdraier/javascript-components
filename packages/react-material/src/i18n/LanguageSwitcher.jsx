import React from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

class LanguageSwitcherCmp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            anchorEl: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this, null);
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
                <Button onClick={this.handleClick}>{this.props.t('label.languages')}</Button>
                <Menu open={Boolean(this.state.anchorEl)}
                      anchorEl={this.state.anchorEl}
                      onClose={this.handleClose}
                >
                    {availableLocales.map(locale => (
                        <MenuItem key={locale}
                                // eslint-disable-next-line
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

LanguageSwitcherCmp.contextTypes = {
    i18n: PropTypes.object
};

LanguageSwitcherCmp.propTypes = {
    t: PropTypes.func.isRequired
};

export const LanguageSwitcher = translate('react-material')(LanguageSwitcher);
