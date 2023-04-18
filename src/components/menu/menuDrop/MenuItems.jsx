import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageLoaded from '../../imageLoaded/ImageLoaded';
import { Link } from 'react-router-dom';

const MenuItems = ({ itemsData = [], toggle, setTitle, setImage }) => {
    const cs = classNames;

    const handleSetValueHeaderMenu = (to, label, src) => {
        if (to) {
            return;
        }
        setTitle(label);
        setImage(src);
    };

    return (
        <div className={cs('menu-wrap-item', { active: toggle })}>
            <ul className={cs('menu-list')}>
                {itemsData.length > 0 &&
                    itemsData.map((item, index) => {
                        const { to, label, img } = item;
                        return (
                            <li
                                className={cs('menu-list-item')}
                                key={item + index}
                                onClick={(e) => handleSetValueHeaderMenu(to, label, img)}
                            >
                                {img && <ImageLoaded src={img} alt={label} />}
                                {to ? <Link to={to}>{label}</Link> : label}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

MenuItems.propTypes = {
    toggle: PropTypes.bool,
    itemsData: PropTypes.array,
    setTitle: PropTypes.func.isRequired,
    setImage: PropTypes.func
};

export default MenuItems;
