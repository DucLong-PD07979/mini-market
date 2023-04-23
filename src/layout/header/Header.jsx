import React, { useState } from 'react';
import classNames from 'classnames';
import { contactItems, traslateData, currencyData } from './helper';
import MenuDrop from '../../components/menu/menuDrop/MenuDrop';
import { Link } from 'react-router-dom';
import * as path from '../../util/constants/router';
import ImageLoaded from '../../components/imageLoaded/ImageLoaded';
import { images } from '../../assets/images';
import Search from './components/Search';
import {
    ArrowDownIcon,
    CartIcon,
    GridLayouIcon,
    UserIcon,
} from '../../components/svg/IconSvg';
import PorTalModal from '../../components/reactPortal/PorTalModal';
import Modal from '../../components/modal/Modal';
import useModal from '../../hooks/useModal';
import HeaderForm from './components/HeaderForm';
import Button from '../../components/button/Button';
import CategoriesList from './components/CategoriesList';
import HeaderNavbarMenu from './components/HeaderNavbarMenu';
import { BasketRepresent } from '../../components/basket';
import { useDispatch, useSelector } from 'react-redux';
import { basketToggle, quanityProduct } from '../../store/sliceBasket/basket.select';
import { basket_toggle } from '../../store/sliceBasket/basket.action';

const Header = (props) => {
    const cs = classNames;

    const { isShow, handleTogleModal, handleCLoseModal } = useModal();
    const toggleBasket = useSelector(basketToggle);
    const quanityProductAdd = useSelector(quanityProduct);
    const dispatch = useDispatch();

    const handleToggleBasket = () => {
        dispatch(basket_toggle(!toggleBasket));
    };

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
                            <div className={cs('header-top-translate')}>
                                <MenuDrop
                                    src={images.US}
                                    title={'en'}
                                    itemsData={traslateData}
                                />
                            </div>
                            <div className={cs('header-top-currency')}>
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
                    <div className={cs('header-bottom-logo-and-search-wrap')}>
                        <Link to={path.HOME} className="header-bottom-logo">
                            <ImageLoaded src={images.LOGO} alt="logo" />
                        </Link>
                        <Search />
                        <div className="header-user-action-wrap">
                            <div className="avatar-user" onClick={handleTogleModal}>
                                <UserIcon />
                            </div>
                            <div className="header-basket" onClick={handleToggleBasket}>
                                <CartIcon />
                                {quanityProductAdd > 0 && (
                                    <span className="header-count-quanity">
                                        {quanityProductAdd}
                                    </span>
                                )}
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
                    <div className={cs('header-bottom-navbar-wrap')}>
                        <div className={cs('header-categories-navbar-wrap')}>
                            <Button
                                className={cs('btn-categories')}
                                leftIcon={GridLayouIcon}
                                rightIcon={ArrowDownIcon}
                                rouded_sx={true}
                            >
                                Categories
                            </Button>
                            <CategoriesList />
                        </div>
                        <HeaderNavbarMenu />
                    </div>
                </div>
            </div>
            {toggleBasket && (
                <PorTalModal wrapperElementID="navbarSide">
                    <BasketRepresent />
                </PorTalModal>
            )}
        </header>
    );
};

export default Header;
