import React from 'react';
import Badge from './Badge';
import {shallowWithTheme} from '@jahia/test-framework';
import {dsGenericTheme} from '../theme';

describe('Badge', () => {
    it('should render a <div />', () => {
        const wrapper = shallowWithTheme(<Badge/>, {}, dsGenericTheme);
        expect(wrapper.find('div').length).toEqual(1);
    });
});
