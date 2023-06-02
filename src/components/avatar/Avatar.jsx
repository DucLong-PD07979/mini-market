import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageLoaded from '../imageLoaded/ImageLoaded';
import { Link } from 'react-router-dom';

const Avatar = ({
    className,
    image = '',
    rouded_sx = false,
    rouded_full = false,
    srcError = '',
    alt = 'user-avatar',
    ...props
}) => {
    const cs = classNames;

    const avatarStyle = cs('avatar-item', {
        [className]: className,
        rouded_sx,
        rouded_full,
    });

    let Compose = 'div';

    if (props.to) {
        Compose = Link;

        return (
            <Compose className={avatarStyle} {...props}>
                <ImageLoaded src={image} alt={alt} srcError={srcError} />
            </Compose>
        );
    }

    if (props.href) {
        Compose = 'a';

        return (
            <Compose className={avatarStyle} {...props}>
                <ImageLoaded src={image} alt={alt} srcError={srcError} />
            </Compose>
        );
    }

    return (
        <Compose className={avatarStyle} {...props}>
            <ImageLoaded src={image} alt={alt} srcError={srcError} />
        </Compose>
    );
};

Avatar.propTypes = {
    classNames: PropTypes.string,
    image: PropTypes.string.isRequired,
    rouded_full: PropTypes.bool,
    rouded_sx: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    srcError: PropTypes.string,
    alt: PropTypes.string.isRequired,
};

export default memo(Avatar);
