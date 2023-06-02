import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FieldTextarea = forwardRef(({ ...props }, ref) => {
    const { className = '', register, errors, name, required, label = false } = props;
    const cs = classNames;

    return (
        <div
            className={cs('form-group', {
                [className]: className,
            })}
        >
            {label && <label htmlFor={props.id}>{label}</label>}
            <textarea ref={ref} {...props} {...register(name, { required })} />
            {errors[name] && <p className="error-mes">{errors[name]?.message}</p>}
        </div>
    );
});

FieldTextarea.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    required: PropTypes.bool,
};

export default FieldTextarea;
