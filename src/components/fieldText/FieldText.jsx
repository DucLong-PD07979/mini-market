import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FieldText = forwardRef(({ ...props }, ref) => {
    const { className = '', register, name, required, label = false, errors } = props;
    const cs = classNames;
    return (
        <div
            className={cs('form-group', {
                [className]: className,
            })}
        >
            {label && <label htmlFor={props.id}>{label}</label>}
            <input ref={ref} type="text" {...register(name, { required })} {...props} />
            {errors[name] && <p className="error-mes">{errors[name]?.message}</p>}
        </div>
    );
});

FieldText.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    required: PropTypes.bool,
};

export default FieldText;
