import React from 'react';
import {storiesOf} from '@storybook/react';
import {DSProvider} from '../../provider';
import {text, select, withKnobs} from '@storybook/addon-knobs';

import {TextVariants, TextColors} from '../PropTypesConstants';

import Typography from './Typography';

storiesOf('Typography', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <DSProvider>
            <Typography variant={select('variant', TextVariants)} color={select('color', TextColors)}>
                {text('content', 'Typography with knobs')}
            </Typography>
        </DSProvider>
    ));
