import React from 'react';
import {shallow} from 'enzyme';

import {Badge} from './Badge';

it('works', () => {
    const wrap = shallow(
        <Badge badgeContent='Groot' />
    );

    expect(wrap.text()).toEqual('Groot');
})
