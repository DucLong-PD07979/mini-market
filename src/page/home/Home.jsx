import React from 'react';
import classNames from 'classnames';
import { CarouselRepesent, CarouseBullet } from '../../components/carousel';
import { Pagination, Autoplay, Navigation } from 'swiper';
import {
    silderDataHome,
    staticDataListBrands,
    staticElementHome,
} from './components/homeHelper';
import {
    FlashIcon,
    GifrLineIcon,
    GridLayouIcon,
    MedalFillIcon,
    StarIconFill,
} from '../../components/svg/IconSvg';
import useFetch from '../../hooks/useFetch';
import {
    fetchCarsProducts,
    fetchFlashProducts,
    fetchRecommentForYou,
} from '../../services/api/productsServices';
import { CardProduct } from '../../components/card';
import HomeWrapContent from './components/HomeWrapContent';
import ListBrandRepesent from '../../components/ListBrand/ListBrandRepesent';
import ImageLoaded from '../../components/imageLoaded/ImageLoaded';
import { imagesHasLicense } from '../../util/helper/imagesHasLicense';

const Home = (props) => {
    const cs = classNames;
    const {
        silderHero: { data: silderHeroData, GetHeroSliderElement },
        sliderCategories: {
            data: silderTopCategoriesData,
            GetTopCategoriesSilderElement,
            categoriesView,
        },
        sliderBigDiscounts: {
            data: sliderBigDiscountsData,
            GetBisDiscountElement,
            bigDiscountsView,
        },
        silderFlash: { flashview },
    } = silderDataHome;
    const { data: flashData } = useFetch([], fetchFlashProducts);
    const {
        topRatings: { data: topRatingsData, GetTopRatingsElement },
        featuredBrands: { data: featuredBrandsData, GetFeaturedBarndsElement },
        newArrivals: { data: newArrivalsData, GetNewArrivalsElement },
    } = staticElementHome;
    const { data: CarsData } = useFetch([], fetchCarsProducts);
    const { listBrandsMobiPhoneData, listBrandCarsData } = staticDataListBrands;
    const { data: RecommentForYouData } = useFetch([], fetchRecommentForYou);

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
                        <HomeWrapContent IconLabel={FlashIcon} title={'Flash Deals'}>
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
                                    breakpoints={flashview}
                                ></CarouselRepesent>
                            </div>
                        </HomeWrapContent>
                        <HomeWrapContent
                            IconLabel={GridLayouIcon}
                            title={'Top Categories'}
                        >
                            <div className="top-categories-silder-wrap">
                                <CarouselRepesent
                                    loop={true}
                                    slidesPerView={3}
                                    scrollbar={{ draggable: true }}
                                    silderdata={silderTopCategoriesData}
                                    navigation_custom={'true'}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    renderitem={GetTopCategoriesSilderElement}
                                    breakpoints={categoriesView}
                                ></CarouselRepesent>
                            </div>
                        </HomeWrapContent>
                        <div className="row">
                            <div className=" col col-xs-12 col-md-6 col-lg-6 col-xl-6 col-gap">
                                <HomeWrapContent
                                    IconLabel={MedalFillIcon}
                                    title={'Top Ratings'}
                                >
                                    <div className="top-ratings-wrap">
                                        <div className="row">
                                            {topRatingsData.length > 0 &&
                                                topRatingsData.map((item, index) => {
                                                    return (
                                                        <GetTopRatingsElement
                                                            {...item}
                                                            key={index}
                                                        />
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </HomeWrapContent>
                            </div>
                            <div className="col col-xs-12 col-md-6 col-lg-6 col-xl-6 col-gap">
                                <HomeWrapContent
                                    IconLabel={StarIconFill}
                                    title={'Featured Brands'}
                                >
                                    <div className="featuresBrands-wrap">
                                        <div className="row">
                                            {featuredBrandsData.length > 0 &&
                                                featuredBrandsData.map((item, index) => {
                                                    return (
                                                        <GetFeaturedBarndsElement
                                                            key={index}
                                                            {...item}
                                                        />
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </HomeWrapContent>
                            </div>
                        </div>
                        <HomeWrapContent IconLabel={StarIconFill} title={'New Arrivals'}>
                            <div className="new-arrivals-wrap">
                                <div className="row">
                                    {newArrivalsData.length > 0 &&
                                        newArrivalsData.map((item, index) => {
                                            return (
                                                <GetNewArrivalsElement
                                                    key={index}
                                                    {...item}
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                        </HomeWrapContent>
                        <HomeWrapContent IconLabel={GifrLineIcon} title={'Big Discounts'}>
                            <div className="big-discounts-wrap">
                                <CarouselRepesent
                                    slidesPerView={6}
                                    scrollbar={{ draggable: true }}
                                    silderdata={sliderBigDiscountsData}
                                    navigation_custom={'true'}
                                    spaceBetween={30}
                                    modules={[Navigation]}
                                    renderitem={GetBisDiscountElement}
                                    breakpoints={bigDiscountsView}
                                ></CarouselRepesent>
                            </div>
                        </HomeWrapContent>
                        <div className="row">
                            <div className="col col-xs-12 col-md-4 col-lg-3 col-gap">
                                <ListBrandRepesent data={listBrandCarsData} />
                            </div>
                            <div className="col col-xs-12 col-md-8 col-lg-9 col-gap">
                                <HomeWrapContent title={'Cars'}>
                                    <div className="row">
                                        {CarsData.length > 0 &&
                                            CarsData.map((product) => {
                                                return (
                                                    <div
                                                        className="col col-xs-12 col-sm-6 col-md-4 col-lg-4 col-gap"
                                                        key={product.id}
                                                    >
                                                        <CardProduct {...product} />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </HomeWrapContent>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-xs-12 col-md-4 col-lg-3 col-gap">
                                <ListBrandRepesent data={listBrandsMobiPhoneData} />
                            </div>
                            <div className="col col-xs-12 col-md-8 col-lg-9 col-gap">
                                <HomeWrapContent title={'Mobile Phones'}>
                                    <div className="row">
                                        {CarsData.length > 0 &&
                                            CarsData.map((product) => {
                                                return (
                                                    <div
                                                        className="col col-xs-12 col-sm-6 col-md-4 col-lg-4 col-gap"
                                                        key={product.id}
                                                    >
                                                        <CardProduct {...product} />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </HomeWrapContent>
                            </div>
                        </div>
                        <div className="home-banner-products">
                            <div className="row">
                                <div className="col col-xs-12 col-md-4 col-lg-4 col-gap">
                                    <ImageLoaded
                                        src={imagesHasLicense.homeBanner[0]}
                                        alt="home-product-banner"
                                    ></ImageLoaded>
                                </div>
                                <div className="col col-xs-12 col-md-8 col-lg-8 col-gap">
                                    <ImageLoaded
                                        src={imagesHasLicense.homeBanner[1]}
                                        alt="home-product-banner"
                                    ></ImageLoaded>
                                </div>
                            </div>
                        </div>
                        <HomeWrapContent title={'More For You'}>
                            <div className="row">
                                {RecommentForYouData.length > 0 &&
                                    RecommentForYouData.map((product) => {
                                        return (
                                            <div
                                                className="col col-xs-12 col-sm-6 col-md-3 col-lg-3 col-gap"
                                                key={product.id}
                                            >
                                                <CardProduct {...product} />
                                            </div>
                                        );
                                    })}
                            </div>
                        </HomeWrapContent>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
