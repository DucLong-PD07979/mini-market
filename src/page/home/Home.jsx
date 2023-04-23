import React, { useState } from 'react';
import classNames from 'classnames';
import { CarouselRepesent, CarouseBullet } from '../../components/carousel';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { silderDataHome } from './components/homeHelper';
import { FlashIcon } from '../../components/svg/IconSvg';
import useFetch from '../../hooks/useFetch';
import { fetchFlashProducts } from '../../services/api/productsServices';
import { CardProduct } from '../../components/card';
import HomeHeaderItem from './components/HomeHeaderItem';

const Home = (props) => {
    const cs = classNames;
    const {
        silderHero: { data: silderHeroData, GetHeroSliderElement },
    } = silderDataHome;
    const { data: flashData } = useFetch([], fetchFlashProducts);

    return (
        <div className={cs('home-wrapper')}>
            <div className="home-banner-hero">
                <div className="container">
                    <div className="home-banner-hero-inner">
                        <CarouselRepesent
                            loop={true}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2600,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{ draggable: true }}
                            pagination={{
                                clickable: true,
                                renderBullet: CarouseBullet,
                            }}
                            modules={[Pagination, Autoplay]}
                            silderdata={silderHeroData}
                            renderitem={GetHeroSliderElement}
                        ></CarouselRepesent>
                    </div>
                </div>
            </div>
            <main id="main-content">
                <div className="container">
                    <div className="home-main-content-inner">
                        <div className="flash-deals-wrap">
                            <HomeHeaderItem IconLabel={FlashIcon} title="Flash Deals" />
                            <div className="flash-deals-silder-wrap">
                                <CarouselRepesent
                                    loop={true}
                                    slidesPerView={4}
                                    scrollbar={{ draggable: true }}
                                    silderdata={flashData}
                                    navigation_custom={'true'}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    renderitem={CardProduct}
                                ></CarouselRepesent>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
