import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../svg/IconSvg';

const CarouselBtnPrev = forwardRef(({ className, Icon = false }, ref) => {
    const swiperRef = ref;

    const handleBtnPrev = () => {
        if (!swiperRef.current) return;
        swiperRef.current?.slidePrev();
    };

    return (
        <Button className={className} onClick={handleBtnPrev}>
            {Icon || <ArrowLeftIcon />}
        </Button>
    );
});

const CarouselBtnNext = forwardRef(({ className, Icon = false }, ref) => {
    const swiperRef = ref;

    const handleBtnNext = () => {
        if (!swiperRef.current) return;
        swiperRef.current?.slideNext();
    };

    return (
        <Button className={className} onClick={handleBtnNext}>
            {Icon || <ArrowRightIcon />}
        </Button>
    );
});

const CarouselNavigator = {
    CarouselBtnPrev,
    CarouselBtnNext,
};

CarouselNavigator.CarouselBtnPrev.propTypes = {
    className: PropTypes.string,
    Icon: PropTypes.node,
};

CarouselNavigator.CarouselBtnNext.propTypes = {
    className: PropTypes.string,
    Icon: PropTypes.node,
};

export default CarouselNavigator;
