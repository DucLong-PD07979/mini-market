import React from 'react';
import { CartIcon } from '../svg/IconSvg';
import BasketItem from './BasketItem';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { basket_toggle } from '../../store/sliceBasket/basket.action';
import {
    basketSelect,
    quanityProduct,
    totalMoneySelect,
} from '../../store/sliceBasket/basket.select';
import { formatPrice } from '../../util/helper/formatPrice';
import { useNavigate } from 'react-router-dom';
import * as pathPage from '../../util/constants/router';

const BasketRepresent = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleCloseBasket = () => {
        dispatch(basket_toggle(false));
    };

    const quanityProductInBasket = useSelector(quanityProduct);
    const basketData = useSelector(basketSelect);
    const totalMoneyAllProduct = useSelector(totalMoneySelect);

    const handleSwitchCheckoutPage = () => {
        navigation(pathPage.CHECKOUT);
    };

    const handleSwitchCartPage = () => {
        navigation(pathPage.CART);
    };

    return (
        <div className="basket-wrap">
            <div className="basket-overlay" onClick={handleCloseBasket}></div>
            <div className="basket-content">
                <div className="basket-header">
                    <CartIcon className="basket-icon" />
                    <span>{quanityProductInBasket} item</span>
                </div>
                <div className="basket-body">
                    {basketData.length > 0 &&
                        basketData.map((product) => {
                            return <BasketItem key={product.id} {...product} />;
                        })}
                </div>
                <div className="basket-footer">
                    <Button
                        rouded_sx={true}
                        primary={true}
                        className={'btn-checkout'}
                        onClick={handleSwitchCheckoutPage}
                    >
                        Checkout Now ({formatPrice(totalMoneyAllProduct)})
                    </Button>
                    <Button
                        rouded_sx={true}
                        outline={true}
                        className={'btn-view-cart'}
                        onClick={handleSwitchCartPage}
                    >
                        View Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BasketRepresent;
