import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ImageLoaded = forwardRef(({className = false, alt = '', srcError, src, ...props }, ref) => {

    const cs = classNames;
    const [status, setStatus] = useState(false);

    return (
        <img
            className={cs(className,)}
            ref={ref}
            src={!status ? src : srcError}
            alt={alt}
            {...props}
            onError={(e) => setStatus(true)}
        />
    );
});

ImageLoaded.propTypes = {
    alt: PropTypes.string.isRequired,
    srcError : PropTypes.string,
    src: PropTypes.string,
    props: PropTypes.any
};

export default ImageLoaded;
