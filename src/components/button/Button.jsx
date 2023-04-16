import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    children,
    className,
    disable = false,
    onClick,
    leftIcon = false,
    rightIcon = false,
    rouded_sx,
    rouded_full,
    primary,
    outline,
    text,
    ...passProps
}) => {
    const cs = classNames;

    const btnStyle = cs('btn', {
        [className]: className,
        rouded_sx,
        rouded_full,
        primary,
        outline,
        text,
    });

    const props = {
        onClick,
        ...passProps,
    };

    Object.keys(props).forEach((key) => {
        if (disable) {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        }
    });

    const LeftIconComp = leftIcon;
    const RightIconCompo = rightIcon;

    return (
        <button className={btnStyle} {...props}>
            {leftIcon && <LeftIconComp className="left-icon" />}
            {children}
            {rightIcon && <RightIconCompo className="right-icon" />}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any,
    rouded_sx: PropTypes.bool,
    rouded_full: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
};

export default Button;
