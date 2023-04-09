import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageLoaded from '../../imageLoaded/ImageLoaded';
import { Link } from 'react-router-dom';

const MenuItems = ({ itemsData = [], toggle, setTitle }) => {
    const cs = classNames;

    const handleSetTitle = (to, label) => {
        if (to) {
            return;
        }

        setTitle(label);
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
                                onClick={(e) => handleSetTitle(to, label || item.name)}
                            >
                                {img && (
                                    <ImageLoaded src={img} alt={label || item.name} />
                                )}
                                {to ? (
                                    <Link to={to}>{label || item.name}</Link>
                                ) : (
                                    label || item.name
                                )}
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
};

export default MenuItems;
