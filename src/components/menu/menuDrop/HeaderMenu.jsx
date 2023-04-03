import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageLoaded from '../../imageLoaded/ImageLoaded';
import { ArrowDownIcon } from '../../svg/IconSvg';

const HeaderMenu = ({ title = 'menu drop', icon = true, src = false, handleToggle }) => {
    const cs = classNames;

    return (
        <div
            className={cs('menu-drop-header')}
            onClick={handleToggle}
        >
            {src && <ImageLoaded src={src} />}
            <span className={cs('menu-title')}>{title}</span>
            {icon && <ArrowDownIcon className="header-icon" />}
        </div>
    );
};

HeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    img: PropTypes.string,
};

export default HeaderMenu;
