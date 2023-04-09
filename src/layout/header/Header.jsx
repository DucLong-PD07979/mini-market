import React from 'react';
import classNames from 'classnames';
import { contactItems, traslateData, currencyData } from './helper';
import MenuDrop from '../../components/menu/menuDrop/MenuDrop';
import { Link } from 'react-router-dom';
import * as path from '../../util/constants/router';
import ImageLoaded from '../../components/imageLoaded/ImageLoaded';
import { images } from '../../assets/images';
import Search from './components/Search';
import { CartIcon, UserIcon } from '../../components/svg/IconSvg';
import PorTalModal from '../../components/reactPortal/PorTalModal';
import Modal from '../../components/modal/Modal';
import useModal from '../../hooks/useModal';
import HeaderForm from './components/HeaderForm';

const Header = (props) => {
    const cs = classNames;

    const { isShow, handleTogleModal, handleCLoseModal } = useModal();
    
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
                                <MenuDrop
                                    src={images.US}
                                    title={'en'}
                                    itemsData={traslateData}
                                />
                            </div>
                            <div className="header-top-currency">
                                <MenuDrop
                                    src={images.US}
                                    title={'use'}
                                    itemsData={currencyData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cs('header-bottom')}>
                <div className="container">
                    <div className="header-bottom-logo-and-search-wrap">
                        <Link to={path.HOME} className="header-bottom-logo">
                            <ImageLoaded src={images.LOGO} alt="logo" />
                        </Link>
                        <Search />
                        <div className="header-user-action-wrap">
                            <div className="avatar-user" onClick={handleTogleModal}>
                                <UserIcon />
                            </div>
                            <div className="header-basket">
                                <CartIcon />
                                <span className="header-count-quanity">1</span>
                            </div>
                            {isShow && (
                                <PorTalModal>
                                    <Modal handleCLoseModal={handleCLoseModal}>
                                        <HeaderForm handleCLoseModal={handleCLoseModal} />
                                    </Modal>
                                </PorTalModal>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
