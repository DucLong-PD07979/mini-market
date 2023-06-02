import React from 'react';
import PropTypes from 'prop-types';
import ProductImageBox from './ProductImageBox';
import ContentDetails from './ContentDetails';

const ProductSingleDetailsRepesent = ({ data, loading, ...props }) => {
    return (
        <div className="product-details-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12 col-md-6 col-lg-6 col-gap">
                        {!loading && <ProductImageBox data={data} />}
                    </div>
                    <div className="col col-xs-12 col-md-6 col-lg-6 col-gap">
                        {!loading && <ContentDetails data={data} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductSingleDetailsRepesent.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default ProductSingleDetailsRepesent;
