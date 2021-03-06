# Test Framework
The purpose of this package is to provide a common configuration, dependencies, 
utilities and mocks for unit testing JavaScript projects.

Any new mock or test utilities that might be relevant to multiple projects should be added to this framework.

The framework relies on the following libraries:
- [Jest](https://jestjs.io/)
- [Enzyme](https://airbnb.io/enzyme/)

## Setup

- Add this package to the `devDependencies` of the project you intend to add unit tests to. This can be accomplished using `yarn` with 
the following command:

    ````yarn add --dev @jahia/test-framwork````

    or using `npm` with the following one:

    ```npm install @jahia/test-framework --save-dev```

- Create a file named `jest.config.js` as a sibling to your `package.json`, with the following content:

    ```
    const jestConfig = require('@jahia/test-framework').jestConfig;

    module.exports = jestConfig;

    ```
    This will provide proper Jest and Enzyme configurations to your project.
    
- Update the scripts in your `package.json` to match the ones below:
    
    ```
    "build": "yarn lint && yarn test && yarn webpack"
    "test": "jest --coverage",
    "tdd": "jest --watch"
    ```
    
- To be able to run your tests, you will need setup **[Babel](https://babeljs.io/)** as described below.

    - Add the following packages to you `devDependencies`:
        1. `babel-jest`
        2. `@babel/preset-env`
        3. `@babel/preset-react`
        4. `@babel/plugin-transform-runtime`
     
    - Create a `.babelrc` file as a sibling to you `package.json`, with at least the following content:
        ```
        {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ],
            "plugins": [
                ["@babel/plugin-transform-runtime", {"regenerator": true}]
            ]
        }    
        ```
    
## Jest

**Jest** is a JavaScript testing framework. It provides a test runner, assertions, mocking support and code coverage.

You can learn about it here: https://jestjs.io/

## Enzyme

**Enzyme** is a JavaScript testing utility for [React](https://reactjs.org/).

You can learn about it here: https://airbnb.io/enzyme/

When using the test-framework, you don't need to explicitly add Enzyme to your project, nor do any specific configuration. Everything 
required should be inherited from the test-framework.

As a consequence, every JavaScript imports from Enzyme should be obtained through `@jahia/test-framework` instead. Thus, you must use
```
import { shallow } from '@jahia/test-framework';
```
instead of
```
import { shallow } from 'enzyme';
```

## Usage

Unit tests must be located in their own specific files which should respect the following conventions:
- a test file should be a sibling of the file containing the code to test
- a test file should be named after the file containing the code to test, so that unit tests for a file named **foo.js** should be 
located in a file named **foo.test.js** (or **foo.spec.js**).

Here is one of our test as example:
```jsx
import React from 'react';
import {shallow} from '@jahia/test-framework';
import {IconButton} from '@jahia/design-system-kit';
import {RotatePanel} from './RotatePanel';
import defaultProps from '../../../testDefaultProps';

describe('Rotate panel', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        try {
            props = {
                onRotate: jest.fn(),
            };

            wrapper = shallow(<RotatePanel {...defaultProps} {...props}/>);
        } catch (e) {
            console.log(e);
        }
    });

    it('Should rotate the image', () => {
        wrapper.find(IconButton).last().simulate('click');
        expect(props.onRotate.mock.calls.length).toBe(1);
        expect(props.onRotate.mock.calls[0][0]).toBe(1);

        wrapper.find(IconButton).first().simulate('click');
        expect(props.onRotate.mock.calls.length).toBe(2);
        expect(props.onRotate.mock.calls[1][0]).toBe(-1);
    });

});
```

## IDE integration

- To get rid of syntax errors in your test files and get code completion in `IntelliJ IDEA`, you will need to install proper syntax 
definition, by proceeding as below:

    1. In IntelliJ's *Preferences | Languages & Frameworks | JavaScript*, press **Download...**
    2. Select `jest` from the list of available stubs
    3. Press **Download and install**

- To benefit from Jest integration from within `ÌntelliJ IDEA`, and be able to run unit tests from there, you will need to have `Jest` 
installed locally. This can be accomplished 
using `yarn` with the following command:

    ```yarn add --dev jest```
  
    or using `npm` with the following one:
  
    ```npm install jest --save-dev```
