import React from 'react';
import {shallowWithTheme} from '@jahia/test-framework';
import {dsGenericTheme} from '../../theme';
import {Button} from '../Button';
import LanguageSwitcher from './LanguageSwitcher';
import {Menu, MenuItem} from '@material-ui/core';

describe('LanguageSwitcher', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            color: 'default',
            lang: 'en',
            languages: [
                {
                    language: 'en',
                    displayName: 'English'
                }
            ],
            onSelectLanguage: jest.fn()
        };
        wrapper = shallowWithTheme(<LanguageSwitcher {...props}/>, {}, dsGenericTheme);
    });

    it('should contain one Button component and no Menu when only one language is present', () => {
        expect(wrapper.find(Button).length).toBe(1);
        expect(wrapper.find(Menu).length).toBe(0);
    });

    it('should a menu and two menu items corresponding to the languages', () => {
        props.languages.push({language: 'fr', displayName: 'French'});
        wrapper.setProps(props);
        expect(wrapper.find(Menu).length).toBe(1);
        expect(wrapper.find(MenuItem).length).toBe(2);
    });

    it('should call onSelectLanguage on language selection', () => {
        props.languages.push({language: 'fr', displayName: 'French'});
        wrapper.setProps(props)
            .find(Button)
            .simulate('click', {currentTarget: {}});

        wrapper.find('WithStyles(MenuItem)').at(0).simulate('click');
        expect(props.onSelectLanguage.mock.calls.length).toBe(1);
    });
});
