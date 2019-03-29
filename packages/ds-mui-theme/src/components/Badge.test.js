import React from 'react';
import Badge from './Badge';
import {shallowWithTheme} from '@jahia/test-framework';

describe('Badge', () => {
    it('should render a <div />', () => {
        const wrapper = shallowWithTheme(<Badge/>);
        expect(wrapper.find('div').length).toEqual(1);
    });
});
