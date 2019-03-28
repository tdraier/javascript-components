import React from 'react';
import {shallow} from 'enzyme';

import {Badge} from './Badge';

describe('Badge', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Badge debug />);

        expect(component).toMatchSnapshot();
    });
});
