import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './Button';
import {DSProvider} from '../../provider';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import {Refresh} from '@material-ui/icons';
import doc from './Button.md';

const variant = () => select('variant', ['ghost', 'primary', 'secondary', 'inline'], Button.defaultProps.variant);
const color = () => select('color', ['default', 'inverted'], Button.defaultProps.color);
const size = () => boolean('compact', false) ? 'compact' : 'normal';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Simple button', () => (
        <DSProvider><Button variant={variant()} size={size()} color={color()} onClick={action('button-click')}>Simple Button</Button></DSProvider>
    ), {notes: {markdown: doc}})
    .add('Button with icon', () => (
        <DSProvider><Button icon={<Refresh/>} variant={variant()} size={size()} color={color()} onClick={action('button-click')}>Button with icon</Button></DSProvider>
    ), {notes: {markdown: doc}});
