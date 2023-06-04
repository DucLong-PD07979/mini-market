import React from 'react';
import { ProductSingleDetailsRepesent } from './components/productSingleDetails';
import { useSelector } from 'react-redux';
import DescriptionAndReview from './components/descriptionAndReview/DescriptionAndReview';
import ImageLoaded from '../../components/imageLoaded/ImageLoaded';
import { productsBuyTogetherData, shopData } from './components/helper';
import { AddIcon, EqualLineIcon } from '../../components/svg/IconSvg';
import Button from '../../components/button/Button';
import { formatPrice } from '../../util/helper/formatPrice';
import { numberRandom } from '../../util/helper/numberRandom';
import Avatar from '../../components/avatar/Avatar';
import { CardProduct } from '../../components/card';
import useFetchWithFirebase from '../../hooks/useFetchWithFirebase';
import firebaseServices from '../../services/firebase/firebase.services';

const ProductDetails = (props) => {
    const idOfProduct = useSelector((state) => state.basket.idSingleProduct);
    const { getSingleDetailsProduct, getProducstRealted } =
        firebaseServices.read_Data_To_Firebase;

    const { data: singleProductData, loading } = useFetchWithFirebase(
        [idOfProduct],
        getSingleDetailsProduct(idOfProduct),
    );

    const { data: productsRealtedData } = useFetchWithFirebase(
        [idOfProduct, singleProductData],
        getProducstRealted(singleProductData?.categories?.name),
    );

    return (
        <div className="product-details-wrapper">
            <div className="product-content-inner">
                <ProductSingleDetailsRepesent
                    loading={loading}
                    data={singleProductData}
                />
                <DescriptionAndReview />
                <div className="container">
                    <div className="box-item-wrap">
                        <h4>Frequently Bought Together</h4>
                        <div className="buy-together-products">
                            {productsBuyTogetherData.length > 0 &&
                                productsBuyTogetherData.map((product, index) => {
                                    return index < productsBuyTogetherData.length - 1 ? (
                                        <React.Fragment key={index}>
                                            <div className="product-single" key={index}>
                                                <a href="/">
                                                    <div className="img-holder">
                                                        <ImageLoaded
                                                            src={product.image}
                                                            alt={product.title}
                                                        />
                                                    </div>
                                                    <h5>{product.title}</h5>
                                                    <p>
                                                        {formatPrice(product.price)}
                                                        <span className="old-price">
                                                            {formatPrice(
                                                                product.price +
                                                                    numberRandom(20, 40),
                                                            )}
                                                        </span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="operater-colum">
                                                <AddIcon />
                                            </div>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment key={index}>
                                            <div className="product-single" key={index}>
                                                <a href="/">
                                                    <div className="img-holder">
                                                        <ImageLoaded
                                                            src={product.image}
                                                            alt={product.title}
                                                        />
                                                    </div>
                                                    <h5>{product.title}</h5>
                                                    <p>
                                                        {formatPrice(product.price)}
                                                        <span className="old-price">
                                                            {formatPrice(
                                                                product.price +
                                                                    numberRandom(20, 40),
                                                            )}
                                                        </span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="operater-colum equal-operater">
                                                <EqualLineIcon />
                                            </div>
                                        </React.Fragment>
                                    );
                                })}
                            <div className="buy-together-control">
                                <p className="price">{formatPrice(2500)}</p>
                                <p className="discount">Save $500</p>
                                <div className="features-add-products">
                                    <Button
                                        primary={true}
                                        rouded_sx={true}
                                        style={{ padding: '10px 16px' }}
                                    >
                                        Add to Cart
                                    </Button>

                                    <Button
                                        outline={true}
                                        rouded_sx={true}
                                        style={{ padding: '10px 12px' }}
                                    >
                                        Add to List
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-item-wrap">
                        <h4>Also Available at</h4>
                        <div className="shop-address">
                            <div className="row">
                                {shopData.length > 0 &&
                                    shopData.map((shop, index) => {
                                        return (
                                            <div
                                                className="col col-lg-2 col-xs-6 col-ms-4 col-md-4 col-gap"
                                                key={index}
                                            >
                                                <div className="shop-address__item">
                                                    <Avatar
                                                        to={shop.path}
                                                        image={shop.avatar}
                                                        alt={shop.nameShop + '_avatar'}
                                                    ></Avatar>
                                                    <h5>{shop.nameShop}</h5>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="box-item-wrap">
                        <h4>Realted Products</h4>
                        <div className="products-realted">
                            <div className="row">
                                {productsRealtedData.length > 0 &&
                                    productsRealtedData.map((product) => {
                                        return (
                                            <div
                                                className="col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-gap"
                                                key={product.id}
                                            >
                                                <CardProduct {...product} />
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
