# ESLint config
This package is the [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) to use with your JS project

## Setup

- Add this package to the `devDependencies` of the project you intend to add ESLint to.
This can be accomplished using `yarn` with the following command:

    ````yarn add --dev @jahia/eslint-config````

    or using `npm` with the following one:

    ```npm install @jahia/eslint-config --save-dev```

- Create a file named `.eslintrc.json` as a sibling of your `package.json`, with the following content:

    ```json
    {
      "extends": "@jahia"
    }
    ```

- Update the scripts in your `package.json` to something like:
    
    ```json
    {
      "build": "yarn lint && yarn webpack",
      "lint": "eslint --ext js,jsx .",
      "lint:fix": "eslint --ext js,jsx --fix ."
    }
    ```

- Additionally you may want to add a file `.eslintignore` as a sibling of your `package.json`, with the following content:
    ```
    node
    node_modules
    target
    build
    ```

- Also depending on your need your can override some rules in the `.eslintrc.json` file by redefining them

## Migration from local config

If you were using a local config, you can probably cleanup some of your devDependencies, here are the list of dependencies from this packages that you can likely remove from your project unless your are explicitely using them:

```json
{
    "babel-eslint": "^10.0.1",
    "eslint-config-xo": "^0.26.0",
    "eslint-config-xo-react": "^0.19.0",
    "eslint-plugin-jest": "^22.3.0",
    "eslint-plugin-react": "^7.11.1",
    "eslint-plugin-react-hooks": "^1.6.0"
}
``` 
