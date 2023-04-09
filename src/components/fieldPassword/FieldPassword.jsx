import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EyeOffIcon, EyeShowIcon } from '../svg/IconSvg';
import Button from '../button/Button';

const FieldPassword = forwardRef(({ ...props }, ref) => {
    const { className = '', register, errors, name, required, label = false } = props;
    const cs = classNames;
    const [isShow, setIsShow] = useState(false);

    const handlePassword = (e) => {
        if (e.preventDefault) e.preventDefault();
        setIsShow(!isShow);
    };

    return (
        <div
            className={cs('form-group', {
                [className]: className,
            })}
        >
            {label && <label htmlFor={props.id}>{label}</label>}
            <div className="wrapp-input">
                <input
                    ref={ref}
                    type={isShow ? 'text' : 'password'}
                    {...props}
                    {...register(name, { required })}
                    autoComplete="current-password"
                />
                <Button onClick={handlePassword} type="button" className={cs('btn-eye')}>
                    {isShow ? <EyeShowIcon /> : <EyeOffIcon />}
                </Button>
            </div>
            {errors[name] && <p className="error-mes">{errors[name]?.message}</p>}
        </div>
    );
});

FieldPassword.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    required: PropTypes.bool,
};

export default FieldPassword;
