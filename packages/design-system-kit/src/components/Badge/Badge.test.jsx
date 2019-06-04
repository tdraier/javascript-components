import React from 'react';
import Badge from './Badge';
import {shallowWithTheme} from '@jahia/test-framework';
import {dsGenericTheme} from '../../theme';

describe('Badge', () => {
    it('should render a <span />', () => {
        const wrapper = shallowWithTheme(<Badge/>, {}, dsGenericTheme);
        expect(wrapper.html()).toContain('span');
    });
});
