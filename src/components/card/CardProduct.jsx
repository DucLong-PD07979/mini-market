import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import ImageLoaded from '../imageLoaded/ImageLoaded';
import { EyeFillIcon, HeartIcon, StarIconFill, StarIconLine } from '../svg/IconSvg';
import CardProductControl from './CardProductControl';
import { numberRandom } from '../../util/helper/numberRandom';
import { formatPrice } from '../../util/helper/formatPrice';
import { memo } from 'react';
import { images as imageAssets } from '../../assets/images';
import * as pathPage from '../../util/constants/router';
import { converTitleToPath } from '../../util/helper/ConverTitleToPath';
import { useDispatch } from 'react-redux';
import { get_id_single_product } from '../../store/sliceBasket/basket.action';
import StarRating from '../starRating/StarRating';

const CardPorduct = ({ id, images, title, price }) => {
    const cs = classNames;

    const percentOffer = numberRandom(20, 35);
    const oldPrice = (price * percentOffer) / 100 + price;

    const disPatch = useDispatch();
    const handleGetIdOfProduct = (id) => {
        disPatch(get_id_single_product(id));
    };

    return (
        <div className={cs('card-single')}>
            <div className={cs('wishlist-with-show-infor')}>
                <button className={cs('show-details-products')}>
                    <EyeFillIcon />
                </button>
                <button className={cs('add-to-wishlist')}>
                    <HeartIcon />
                </button>
            </div>
            <div className={cs('image-holder')}>
                <span className={cs('offer-product')}>
                    {Math.floor(percentOffer)}% off
                </span>
                <Link
                    to={pathPage.PRODUCT + converTitleToPath(title)}
                    className={cs('link-product')}
                    onClick={(e) => handleGetIdOfProduct(id)}
                >
                    <ImageLoaded
                        className={cs('product-image')}
                        src={images[0]}
                        alt={title}
                        srcError={imageAssets.productError}
                    />
                </Link>
            </div>
            <div className={cs('details')}>
                <div className={cs('details-content')}>
                    <Link
                        to={pathPage.PRODUCT + converTitleToPath(title)}
                        className={cs('link-product')}
                        onClick={(e) => handleGetIdOfProduct(id)}
                    >
                        {title}
                    </Link>
                    <StarRating />
                    <p className={cs('price')}>
                        {formatPrice(price)}
                        <span className={cs('price-old')}>
                            {formatPrice(oldPrice.toFixed(2))}
                        </span>
                    </p>
                </div>
                <CardProductControl
                    id={id}
                    images={images[0]}
                    title={title}
                    price={price}
                />
            </div>
        </div>
    );
};

CardPorduct.propTypes = {
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default memo(CardPorduct);
