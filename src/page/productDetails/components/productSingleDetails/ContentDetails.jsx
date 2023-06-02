import React from 'react';
import PropTypes from 'prop-types';
import { AddIcon, SubtractIcon } from '../../../../components/svg/IconSvg';
import { formatPrice } from '../../../../util/helper/formatPrice';
import Button from '../../../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { basketSelect } from '../../../../store/sliceBasket/basket.select';
import {
    basket_add_product,
    basket_remove_product,
} from '../../../../store/sliceBasket/basket.action';
import StarRating from '../../../../components/starRating/StarRating';

const ContentDetails = ({ data: { title, price, images, id } }) => {
    const basketData = useSelector(basketSelect);
    const dispatch = useDispatch();

    const isProductHasBasket = basketData.find((product) => {
        return product.id === id;
    });

    const handleAddProductToBasket = () => {
        dispatch(basket_add_product({ title, price, id, images }));
    };

    const handleRemoveProduct = () => {
        dispatch(basket_remove_product({ title, price, id, images }));
    };

    return (
        <div className="box-details-content">
            <h3 className="name-product">{title}</h3>
            <div className="label-group">
                brand: <span>Ziaomi</span>
            </div>
            <div className="label-group">
                Rated:
                <StarRating rate={5} />
                <span>(50)</span>
            </div>
            <div className="price-group">
                <p className="price-product">{formatPrice(price)}</p>
                <span>Stock Available</span>
            </div>
            {!isProductHasBasket && (
                <Button
                    primary={true}
                    rouded_sx={true}
                    onClick={handleAddProductToBasket}
                    style={{ padding: '12px 24px' }}
                >
                    Add to Cart
                </Button>
            )}
            {isProductHasBasket && (
                <div className="control-btn-group">
                    <Button rouded_sx={true} outline={true} onClick={handleRemoveProduct}>
                        <SubtractIcon />
                    </Button>
                    <span className="quanity-product">
                        {isProductHasBasket.quanity < 10
                            ? '0' + isProductHasBasket.quanity
                            : isProductHasBasket.quanity}
                    </span>
                    <Button
                        rouded_sx={true}
                        outline={true}
                        onClick={handleAddProductToBasket}
                    >
                        <AddIcon />
                    </Button>
                </div>
            )}
            <div className="label-group">
                Sold By: <span>Mobile Store</span>
            </div>
        </div>
    );
};

ContentDetails.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ContentDetails;
