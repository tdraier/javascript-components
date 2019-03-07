import PropTypes from 'prop-types';

export default {
    TextColors: PropTypes.oneOf(['inherit', 'alpha', 'beta', 'gamma', 'invert']),
    TextVariants: PropTypes.oneOf(['giga', 'mega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'iota', 'omega', 'caption', 'legal', 'p']),
    ButtonVariants: PropTypes.oneOf(['ghost', 'primary', 'secondary', 'inline']),
    ButtonColors: PropTypes.oneOf(['default', 'inverted']),
    ButtonSizes: PropTypes.oneOf(['normal', 'compact']),
    IconButtonVariants: PropTypes.oneOf(['ghost', 'normal']),
    IconButtonSizes: PropTypes.oneOf(['normal', 'compact']),
    IconButtonColors: PropTypes.oneOf(['default', 'inverted'])
};
