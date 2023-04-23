import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselNavigator from './CarouselNavigator';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

const CarouselRepesent = ({
    className,
    silderdata,
    renderitem: SilderContent,
    ...props
}) => {
    const { CarouselBtnPrev, CarouselBtnNext } = CarouselNavigator;
    const { navigation_custom } = props; // navigation_custom is a props change for navigation

    const swiperRef = useRef(null);

    return (
        <div className="horizontal-silder">
            <Swiper
                className={className}
                {...props}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {silderdata.length > 0 &&
                    silderdata.map((item, index) => (
                        <SwiperSlide key={item.id || index}>
                            {<SilderContent {...item} />}
                        </SwiperSlide>
                    ))}
            </Swiper>
            {navigation_custom && (
                <CarouselBtnPrev ref={swiperRef} className={'slider-btn btn-prev'} />
            )}
            {navigation_custom && (
                <CarouselBtnNext ref={swiperRef} className={'slider-btn btn-next'} />
            )}
        </div>
    );
};

CarouselRepesent.propTypes = {
    className: PropTypes.string,
    silderdata: PropTypes.array.isRequired,
    renderitem: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    navigation_custom: PropTypes.string,
};

export default CarouselRepesent;
