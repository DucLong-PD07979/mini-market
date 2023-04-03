import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Wrapper = ({ children, fullWidth }) => {
    const cs = classNames;

    return <div className={cs(`wrapper`, { wrapperFull: fullWidth })}>{children}</div>;
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
