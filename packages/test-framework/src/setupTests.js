import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

jest.mock('react-i18next', () => require('./__mocks__/react-i18next'));
