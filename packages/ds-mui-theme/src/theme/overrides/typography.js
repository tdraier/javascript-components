// we use require and not import to not include the binary file to the generated *.umd.js
import NanutoSansRegular from "../../fonts/nunito-sans-v3-latin-regular.woff";
import NanutoSansRegular2 from "../../fonts/nunito-sans-v3-latin-regular.woff2";
import NanutoSansBold from "../../fonts/nunito-sans-v3-latin-700.woff";
import NanutoSansBold2 from "../../fonts/nunito-sans-v3-latin-700.woff2";
import NanutoSansLight from "../../fonts/nunito-sans-v3-latin-300.woff";
import NanutoSansLight2 from "../../fonts/nunito-sans-v3-latin-300.woff2";

var dsTypography = (theme) => ({ "@font-face": [{
        fontFamily: 'Nunito Sans',
        fontWeight: '300',
        src: 'url(\'' + NanutoSansLight2 + '\') format(\'woff2\')',
        fallbacks: [{ src: 'url(\'' + NanutoSansLight + '\') format(\'woff\')' }]
    }, {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        src: 'url(\'' + NanutoSansRegular2 + '\') format(\'woff2\')',
        fallbacks: [{ src: 'url(\'' + NanutoSansRegular + '\') format(\'woff\')' }]
    }, {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        src: 'url(\'' + NanutoSansBold2 + '\') format(\'woff2\')',
        fallbacks: [{ src: 'url(\'' + NanutoSansBold + '\') format(\'woff\')' }] }]
});

export {dsTypography}
