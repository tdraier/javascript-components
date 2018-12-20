// we use require and not import to not include the binary file to the generated *.umd.js
import NunitoSansRegular from '../../fonts/nunito-sans-v3-latin-regular.woff';
import NunitoSansRegular2 from '../../fonts/nunito-sans-v3-latin-regular.woff2';
import NunitoSansRegularTtf from '../../fonts/nunito-sans-v3-latin-regular.ttf';
import NunitoSansRegularEot from '../../fonts/nunito-sans-v3-latin-regular.eot';
import NunitoSansBold from '../../fonts/nunito-sans-v3-latin-600.woff';
import NunitoSansBold2 from '../../fonts/nunito-sans-v3-latin-600.woff2';
import NunitoSansBoldTtf from '../../fonts/nunito-sans-v3-latin-600.ttf';
import NunitoSansBoldEot from '../../fonts/nunito-sans-v3-latin-600.eot';
import NunitoSansLight from '../../fonts/nunito-sans-v3-latin-300.woff';
import NunitoSansLight2 from '../../fonts/nunito-sans-v3-latin-300.woff2';
import NunitoSansLightEot from '../../fonts/nunito-sans-v3-latin-300.eot';

var dsTypography = (theme) => (
    {
        '@font-face': [{
            fontFamily: 'Nunito Sans',
            fontWeight: '300',
            src: 'url(\'' + NunitoSansLight2 + '\') format(\'woff2\')',
            fallbacks: [
                {src: 'url(\'' + NunitoSansLight + '\') format(\'woff\')'},
                {src: 'url(\'' + NunitoSansLightTtf + '\') format(\'truetype\')'},
                {src: 'url(\'' + NunitoSansLightEot + '\') format(\'embedded-opentype\')'}
            ]
        },
        {
            fontFamily: 'Nunito Sans',
            fontWeight: '400',
            src: 'url(\'' + NunitoSansRegular2 + '\') format(\'woff2\')',
            fallbacks: [
                {src: 'url(\'' + NunitoSansRegular + '\') format(\'woff\')'},
                {src: 'url(\'' + NunitoSansRegularTtf + '\') format(\'truetype\')'},
                {src: 'url(\'' + NunitoSansRegularEot + '\') format(\'embedded-opentype\')'}
            ]
        },
        {
            fontFamily: 'Nunito Sans',
            fontWeight: '600',
            src: 'url(\'' + NunitoSansBold2 + '\') format(\'woff2\')',
            fallbacks: [
                {src: 'url(\'' + NunitoSansBold + '\') format(\'woff\')'},
                {src: 'url(\'' + NunitoSansBoldTtf + '\') format(\'truetype\')'},
                {src: 'url(\'' + NunitoSansBoldEot + '\') format(\'embedded-opentype\')'}
            ]
        }],
        // Every texts are disabled if no color specified
        root : {
            color : theme.palette.text.disabled
        },
        h1: {
            color: theme.palette.text.disabled
        },
        h2: {
            color: theme.palette.text.disabled
        },
        h3: {
            color: theme.palette.text.disabled
        },
        h4: {
            color: theme.palette.text.disabled
        },
        h5: {
            color: theme.palette.text.disabled
        },
        h6: {
            color: theme.palette.text.disabled
        },
        body1: {
            color: theme.palette.text.disabled
        },
        subtitle1:{
            color: theme.palette.text.disabled
        },
        subtitle2:{
            color: theme.palette.text.disabled
        },
        overline:{
            color: theme.palette.text.disabled
        },
        body2: {
            color: theme.palette.text.disabled
        },
        paragraph: {
            color: theme.palette.text.secondary
        },
        colorPrimary: {
            color: theme.palette.primary.main
        },
        colorSecondary: {
            color: theme.palette.secondary.main
        },
        colorTextPrimary: {
            color: theme.palette.text.primary
        },
        colorTextSecondary: {
            color: theme.palette.text.secondary
        },
        colorError: {
            color: theme.palette.error.main
        }
});

export {dsTypography}
