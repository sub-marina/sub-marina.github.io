import React  from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className, ...rest }) => {
    return (
        <button className={className} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}

Button.defaultProps = {
    children: 'Click',
    onClick: () => {},
    className: 'default'
}

export default Button;