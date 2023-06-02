import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StarHalf, StarIconFill, StarIconLine } from '../svg/IconSvg';
import classNames from 'classnames';

const StarRating = ({ rate = 4, className = '', modelSelect = false, ...props }) => {
    const starStyle = classNames('star-wrap', {
        [className]: className,
        modelSelect: modelSelect,
    });
    
    const starRender = Array.from(new Array(5)).map((_, index) => {
        if (index + 1 <= rate) {
            return (
                <React.Fragment key={index}>
                    <StarIconFill {...props}/>
                </React.Fragment>
            );
        } else if (index + 0.5 <= rate) {
            return (
                <React.Fragment key={index}>
                    <StarHalf />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment key={index}>
                    <StarIconLine {...props}/>
                </React.Fragment>
            );
        }
    });
    return <div className={starStyle}>{starRender}</div>;
};

StarRating.propTypes = {
    rate: PropTypes.number,
    className: PropTypes.string,
    modelSelect: PropTypes.bool,
};

export default memo(StarRating);
