# React DX components
The goal of this module is to be able to provide everything necessary to make other modules containing only javascript.
By everything it means:
- the views to display the components
- context information as the current node path, type, user, etc..
- a GraphQL connection 
- i18n

## Setup

here the tools needed:
- yarn: used to manage dependencies 
- webpack: used to package the js. 

Webpack can be used while developing to watch the sources, by building the js as the jsx change.

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
- i18n file is a json file format
- i18n files are stored in `main/resources/javascript/locales`
- file name is `<locale>.json` where `locale` is `en`, `de`, `FR_fr`, etc ..

You have to set your React DX application as i18n in our main class wrapper `<DxContextProvider />`

``` 
<DxContextProvider i18n>
<MyCustomComponent {...props} />
</DxContextProvider>
```

()Note that this must be done AFTER the declaration of `MyCustomComponent`)

To use i18n in `MyCustomComponent`, you need to wrap it with the translation component:

```
MyCustomComponent = translate('<moduleName>')(SeoSiteSettingsApp);

```  
where `moduleName` is the artifact id of the module.
This will add a function `t` in `props` used to get the translated value from a key define in the `.json` file. 
You can get it in JSX using:

```{props.t('label.title')}```


## shared components
`<LanguageSwitcher/>` this component display a language switcher and change the locale in the context

### Material UI
here the material ui library to build components:
https://material-ui-next.com/getting-started/installation/ 