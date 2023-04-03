import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageLoaded from '../../imageLoaded/ImageLoaded';
import { Link } from 'react-router-dom';

const MenuItems = ({ itemsData = [], toggle }) => {
    const cs = classNames;

    return (
        <div className={cs('menu-wrap-item', { active: toggle })}>
            <ul className={cs('menu-list')}>
                {itemsData.length > 0 &&
                    itemsData.map((item, index) => {
                        return (
                            <li className={cs('menu-list-item')} key={item + index}>
                                <span>
                                    <ImageLoaded src={item.img} alt={item.label} />
                                </span>
                                {item.to ? (
                                    <Link to={item.to}>{item.label}</Link>
                                ) : (
                                    item.label
                                )}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

MenuItems.propTypes = {
    active: PropTypes.bool,
};

export default MenuItems;
