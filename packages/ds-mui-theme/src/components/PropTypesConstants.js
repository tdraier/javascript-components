import PropTypes from 'prop-types';

export default {
    TextColor: PropTypes.oneOf(['inherit', 'alpha', 'beta', 'gamma', 'invert']),
    IconButtonVariants: PropTypes.oneOf(['ghost', 'normal']),
    IconButtonSizes: PropTypes.oneOf(['normal', 'compact']),
    IconButtonColors: PropTypes.oneOf(['default'])
};
