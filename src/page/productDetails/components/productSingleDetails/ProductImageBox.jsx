import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageLoaded from '../../../../components/imageLoaded/ImageLoaded';

const ProductImageBox = ({ data: { images = [], title } }) => {
    const [imageActive, setImageActive] = useState(0);

    const handleGetImageShow = (index) => {
        setImageActive(index);
    };

    return (
        <div className="box-images-product">
            <div className="thumbnail-image">
                <ImageLoaded src={images[imageActive]} alt={title} />
            </div>
            <div className="list-images-wrap">
                {images.length > 0 &&
                    images.map((img, index) => {
                        return (
                            <div key={index} onClick={(e) => handleGetImageShow(index)}>
                                <ImageLoaded src={img} alt={title} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

ProductImageBox.propTypes = {
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default ProductImageBox;
