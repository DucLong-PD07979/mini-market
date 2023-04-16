import React from 'react';
import classNames from 'classnames';
import { menuItemsData } from '../helper';
import { Link } from 'react-router-dom';

const HeaderNavbarMenu = (props) => {
    const cs = classNames;

    return (
        <div className={cs('header-navbar-menu')}>
            <ul className={cs('header-menu-list')}>
                {menuItemsData.length > 0 &&
                    menuItemsData.map((item, index) => {
                        return (
                            <li className={cs('header-menu-list-item')} key={index}>
                                <Link
                                    to={item.path}
                                    className={cs('header-menu-list-item-link')}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default HeaderNavbarMenu;
