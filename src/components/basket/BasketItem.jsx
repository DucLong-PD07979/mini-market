import React from 'react';
import PropTypes from 'prop-types';
import BasketControl from './BasketControl';
import ImageLoaded from '../imageLoaded/ImageLoaded';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { CloseIcon } from '../svg/IconSvg';
import { formatPrice } from '../../util/helper/formatPrice';
import { useDispatch } from 'react-redux';
import {
    basket_remove_item_product,
    basket_toggle,
} from '../../store/sliceBasket/basket.action';
import { images } from '../../assets/images';
import * as pathPage from '../../util/constants/router';
import { converTitleToPath } from '../../util/helper/ConverTitleToPath';

const BasketItem = ({ id, ...props }) => {
    const { images: image, price, quanity, title } = props;
    const totalPrice = price * quanity;
    const ditpatch = useDispatch();

    const handleRemoveItemProduct = () => {
        ditpatch(basket_remove_item_product({ id, ...props }));
    };

    const handleCloseBasket = () => {
        ditpatch(basket_toggle(false));
    };

    return (
        <div className="basket-item" key={id}>
            <BasketControl id={id} {...props} />
            <Link
                to={pathPage.PRODUCT + converTitleToPath(title)}
                onClick={handleCloseBasket}
                className="product-link-img"
            >
                <ImageLoaded
                    alt={title}
                    src={image}
                    srcError={images.productError}
                ></ImageLoaded>
            </Link>
            <div className="details-product">
                <Link
                    to={pathPage.PRODUCT + converTitleToPath(title)}
                    onClick={handleCloseBasket}
                    className="basket-title"
                >
                    {title}
                </Link>
                <span className="money-with-quanity">
                    {price} x {quanity}
                </span>
                <span className="total-money">{formatPrice(totalPrice)}</span>
            </div>
            <Button
                className={'btn-remove-item'}
                rouded_full={true}
                onClick={handleRemoveItemProduct}
            >
                <CloseIcon />
            </Button>
        </div>
    );
};

BasketItem.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
    quanity: PropTypes.number.isRequired,
};

export default BasketItem;
