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
