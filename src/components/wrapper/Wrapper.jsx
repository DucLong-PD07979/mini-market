import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Wrapper = ({ className = '', children, fullWidth }) => {
    const cs = classNames;

    return (
        <div className={cs(`wrapper ${className}`, { wrapperFull: fullWidth })}>
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
