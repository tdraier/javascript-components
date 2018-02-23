# React DX components
The goal of this module is to provide everything necessary to make other modules containing only React components (i.e. no Java).
"Everything" means:
- views to display components
- context information like current node path, type, user, etc
- GraphQL connection
- i18n

## Setup
The tools needed are:
- yarn: used to manage dependencies
- webpack: used to package the js

Webpack can be used while developing to watch the sources, by building the js as the jsx changes.

``` webpack --watch --progress ```

## React components
### DxContextProvider
This component wraps any DX React component

```
<DxContextProvider dxContext={props.dxContext} i18n apollo redux mui>
    ...
</DxContextProvider>
```

## appollo (GraphQL)

## Redux
How to use redux in your components

## i18n
i18n support is brought by i18next library (https://www.i18next.com/)
- i18n file is a JSON file format
- i18n files are stored in `main/resources/javascript/locales`
- file name is `<locale>.json` where `locale` is `en`, `de`, `FR_fr`, etc ..

You have to set your React DX application as i18n in our main class wrapper `<DxContextProvider />`

```
<DxContextProvider i18n>
    <MyCustomComponent {...props} />
</DxContextProvider>
```

Note that `MyCustomComponent` declaration must precede wrapping the component with `DxContextProvider`.

In order to use i18n with the `MyCustomComponent`, you need to wrap it with the translation component:

```
MyCustomComponent = translate('<moduleName>')(SeoSiteSettingsApp);

```
where `moduleName` is the artifact ID of the module.

This will add the `t` function to the `props` of the component, to be used to get a translated value by a key defined in the `<locale>.json` file:

```{props.t('label.title')}```


## shared components
`<LanguageSwitcher/>`: this component displays a language switcher and changes the locale value in the context as it is changed by the the user via the UI

### Material UI
We use the Material-UI library to build the UI: https://material-ui-next.com

### Update DX React Component
When you make changes to this module, you might want to update another one that depends on it. For this purpose, in that project, update the library dependency using:

```yarn add @jahia/react-dxcomponents```

This will update the `yarn.lock` file you will have to commit.