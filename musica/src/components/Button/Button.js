import React  from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { children, onClick, className } = props;
    return (
        <button className={className} onClick={onClick}>
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
    children: 'Click'
}

export default Button;