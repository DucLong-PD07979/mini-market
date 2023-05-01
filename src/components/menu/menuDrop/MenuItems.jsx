import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageLoaded from '../../imageLoaded/ImageLoaded';
import { Link } from 'react-router-dom';

const MenuItems = ({
    itemsData = [],
    toggle,
    setTitle,
    setImage,
    handleFocus,
    ...props
}) => {
    const cs = classNames;

    const handleSetValueHeaderMenu = (to, label, src, name) => {
        if (to) {
            return;
        }

        if (name) {
            setTitle(name);
        }

        if (label) {
            setTitle(label);
        }
        if (src) {
            setImage(src);
        }
        handleFocus();
    };

    return (
        <div className={cs('menu-wrap-item', { active: toggle })}>
            <ul className={cs('menu-list')}>
                {itemsData.length > 0 &&
                    itemsData.map((item, index) => {
                        const { to, label, img, name } = item;
                        return (
                            <li
                                className={cs('menu-list-item')}
                                key={item + index}
                                onClick={(e) =>
                                    handleSetValueHeaderMenu(to, label, img, name)
                                }
                            >
                                {img && <ImageLoaded src={img} alt={label} />}
                                {to ? <Link to={to}>{label}</Link> : label}
                                {!to && name}
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
    setImage: PropTypes.func,
    handleFocus: PropTypes.func,
};

export default MenuItems;
