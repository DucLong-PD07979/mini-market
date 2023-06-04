import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AddIcon, SubtractIcon } from '../svg/IconSvg';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    basket_add_product,
    basket_remove_product,
} from '../../store/sliceBasket/basket.action';
import { memo } from 'react';

const CardProductControl = ({ ...props }) => {
    const cs = classNames;
    const dispatch = useDispatch();

    let [quanity] = useState(null);
    const { basket } = useSelector((state) => state.basket);

    basket.forEach((product) => {
        if (product.id === props.id) {
            quanity = product.quanity;
        }
    });

    const handleAddProduct = () => {
        dispatch(basket_add_product(props));
    };

    const handleRemoveProduct = () => {
        dispatch(basket_remove_product(props));
    };

    return (
        <div className={cs('control-product')}>
            <Button
                className={cs('btn-control  btn-control-remove', {
                    'btn-control-remove--actice': quanity > 0,
                })}
                disable={quanity > 0 ? false : true}
                onClick={handleRemoveProduct}
            >
                <SubtractIcon />
            </Button>
            {quanity && <span className={cs('quanity-products ')}>{quanity}</span>}
            <Button
                className={cs('btn-control btn-control-add')}
                onClick={handleAddProduct}
            >
                <AddIcon />
            </Button>
        </div>
    );
};

CardProductControl.propTypes = {
    id: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default memo(CardProductControl);
