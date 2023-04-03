import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { contactItems, traslateData , currencyData} from './helper';
import MenuDrop from '../../components/menu/menuDrop/MenuDrop';

const Header = (props) => {
    const cs = classNames;

    return (
        <header>
            <div className={cs('header-top')}>
                <div className={cs('container')}>
                    <div className={cs('header-inner')}>
                        <div className={cs('header-top-left')}>
                            {contactItems.map((item) => {
                                return (
                                    <div
                                        className={cs('wrapp-contact-icon')}
                                        key={item.label}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cs('header-top-right')}>
                            <a href="/" className={cs('header-top-link')}>
                                Theme FAQ"s
                            </a>
                            <a href="/" className={cs('header-top-link')}>
                                Need Help?
                            </a>
                            <div className="header-top-translate">
                                <MenuDrop title={'en'} itemsData={traslateData} />
                            </div>
                            <div className="header-top-currency">
                                <MenuDrop title={'use'} itemsData={currencyData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cs('header-bottom')}></div>
        </header>
    );
};

Header.propTypes = {}

export default Header;
