import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import { AddIcon, SubtractIcon } from '../svg/IconSvg';
import { useDispatch } from 'react-redux';
import {
    basket_add_product,
    basket_remove_product,
} from '../../store/sliceBasket/basket.action';

const BasketControl = ({ id, ...props }) => {
    const dispatch = useDispatch();

    const handleAddProductToBasket = () => {
        dispatch(basket_add_product({ id, ...props }));
    };

    const handleRemoveProductToBasket = () => {
        dispatch(basket_remove_product({ id }));
    };

    return (
        <div className="basket-control">
            <Button
                className={'btn-add'}
                rouded_full={true}
                onClick={handleAddProductToBasket}
            >
                <AddIcon />
            </Button>
            <span className="quanity">{props.quanity}</span>
            <Button
                className={'btn-remove'}
                rouded_full={true}
                onClick={handleRemoveProductToBasket}
            >
                <SubtractIcon />
            </Button>
        </div>
    );
};

BasketControl.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
    quanity: PropTypes.number.isRequired,
};

export default BasketControl;
