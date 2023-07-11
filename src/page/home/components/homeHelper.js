import { Link } from 'react-router-dom';
import { images } from '../../../assets/images';
import Button from '../../../components/button/Button';
import ImageLoaded from '../../../components/imageLoaded/ImageLoaded';
import { imagesHasLicense } from '../../../util/helper/imagesHasLicense';
import { StarIconFill, StarIconLine } from '../../../components/svg/IconSvg';
import { formatPrice } from '../../../util/helper/formatPrice';
import { numberRandom } from '../../../util/helper/numberRandom';
import * as pathPage from '../../../util/constants/router';
import { converTitleToPath } from '../../../util/helper/ConverTitleToPath';

const silderHeroBannerData = [
    {
        image: images.appleWatch,
        title: '50% Off For Your First Shopping',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    },
    {
        image: images.appleWatch,
        title: '45% Off For Your First Shopping',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    },
];

const GetHeroSliderElement = ({ image, title, des }) => {
    return (
        <div className="silder-item-content">
            <div className="silder-item-box">
                <h3 className="title">{title}</h3>
                <p className="description">{des}</p>
                <Button primary={true} rouded_sx={true} className={'btn-shop-now'}>
                    Shop Now
                </Button>
            </div>
            <ImageLoaded src={image} alt={'banner-home'} className={'banner-img'} />
        </div>
    );
};

const sliderTopCategoriesData = [
    {
        title: 'Headphone',
        description: '3k orders this week',
        image: imagesHasLicense.categories[0],
    },
    {
        title: 'Watch',
        description: '3k orders this week',
        image: imagesHasLicense.categories[1],
    },
    {
        title: 'Sunglass',
        description: '3k orders this week',
        image: imagesHasLicense.categories[2],
    },
    {
        title: 'Headphone',
        description: '3k orders this week',
        image: imagesHasLicense.categories[0],
    },
    {
        title: 'Watch',
        description: '3k orders this week',
        image: imagesHasLicense.categories[1],
    },
    {
        title: 'Sunglass',
        description: '3k orders this week',
        image: imagesHasLicense.categories[2],
    },
];

const GetTopCategoriesSilderElement = ({ title, description, image }) => {
    return (
        <Link to={'none-product'} className="link-item">
            <div className="silder-item-content">
                <div className="silder-item-box">
                    <ImageLoaded src={image} alt={title}></ImageLoaded>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

const bigDiscounts = [
    {
        title: 'BenX 2020',
        price: '209',
        image: imagesHasLicense.bigDiscounts[0],
    },
    {
        title: 'Tony TV 1080p',
        price: '258',
        image: imagesHasLicense.bigDiscounts[1],
    },
    {
        title: 'Tony PS4',
        price: '168',
        image: imagesHasLicense.bigDiscounts[2],
    },
    {
        title: 'Setgearr 2020',
        price: '111',
        image: imagesHasLicense.bigDiscounts[3],
    },
    {
        title: 'Tony BGB',
        price: '168',
        image: imagesHasLicense.bigDiscounts[4],
    },
    {
        title: 'RG products',
        price: '270',
        image: imagesHasLicense.bigDiscounts[5],
    },
    {
        title: 'Ranasonic 2019',
        price: '290',
        image: imagesHasLicense.bigDiscounts[6],
    },
    {
        title: 'Pune HD',
        price: '370',
        image: imagesHasLicense.bigDiscounts[7],
    },
    {
        title: 'Tony CCTV',
        price: '110',
        image: imagesHasLicense.bigDiscounts[8],
    },
];

export const GetBisDiscountElement = ({ image, title, price }) => {
    const percentOffer = numberRandom(20, 35);
    const oldPrice = (price * percentOffer) / 100 + price;
    return (
        <div className="box-item-content">
            <Link to={'/page-none'}>
                <div className="img-hold">
                    <ImageLoaded src={image} alt={title}></ImageLoaded>
                </div>
            </Link>
            <Link to={'/page-none'}>
                <h4>{title}</h4>
            </Link>
            <p>
                {formatPrice(price)} <span>{formatPrice(oldPrice)}</span>
            </p>
        </div>
    );
};

const slideReponsive = Object.freeze({
    flashview: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
    categoriesView: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    bigDiscountsView: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        900: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});

export const silderDataHome = Object.freeze({
    silderHero: {
        data: silderHeroBannerData,
        GetHeroSliderElement,
    },
    silderFlash: {
        // silderFlash được lấy data từ api
        flashview: slideReponsive.flashview,
    },
    sliderCategories: {
        data: sliderTopCategoriesData,
        GetTopCategoriesSilderElement,
        categoriesView: slideReponsive.categoriesView,
    },
    sliderBigDiscounts: {
        data: bigDiscounts,
        GetBisDiscountElement,
        bigDiscountsView: slideReponsive.bigDiscountsView,
    },
});

const topRatingsData = [
    {
        image: imagesHasLicense.topRatings[0],
        title: 'Camera',
        price: 360000,
    },
    {
        image: imagesHasLicense.topRatings[1],
        title: 'Shose',
        price: 999,
    },
    {
        image: imagesHasLicense.topRatings[2],
        title: 'Phone',
        price: 400,
    },
    {
        image: imagesHasLicense.topRatings[3],
        title: 'Watch',
        price: 400,
    },
];

export const GetTopRatingsElement = ({ image, title, price }) => {
    return (
        <div className=" col col-xs-6 col-ms-3 col-md-3 col-lg-3 col-gap">
            <div className="box-item-content">
                <Link to={pathPage.PRODUCT + converTitleToPath(title)}>
                    <div className="img-hold">
                        <ImageLoaded src={image} alt={title}></ImageLoaded>
                    </div>
                </Link>
                <div className="star-wrap">
                    <StarIconFill />
                    <StarIconFill />
                    <StarIconFill />
                    <StarIconFill />
                    <StarIconLine />
                    <span>(12)</span>
                </div>
                <Link to={pathPage.PRODUCT + converTitleToPath(title)}>
                    <h4>{title}</h4>
                </Link>
                <p>{formatPrice(price)}</p>
            </div>
        </div>
    );
};

const featureBrandsData = [
    {
        image: imagesHasLicense.featuresBrands[0],
        title: 'London Britches',
    },
    {
        image: imagesHasLicense.featuresBrands[1],
        title: 'Jim & Jago',
    },
];

export const GetFeaturedBarndsElement = ({ image, title }) => {
    return (
        <div className=" col col-xs-6 col-gap">
            <div className="box-item-content">
                <Link to={'/page-none'}>
                    <div className="img-hold">
                        <ImageLoaded src={image} alt={title}></ImageLoaded>
                    </div>
                </Link>
                <Link to={'/page-none'}>
                    <h4>{title}</h4>
                </Link>
            </div>
        </div>
    );
};

const newArrivals = [
    {
        image: imagesHasLicense.newArrivals[0],
        title: 'Sunglass',
        price: 150,
    },
    {
        image: imagesHasLicense.newArrivals[1],
        title: 'Makeup',
        price: 250,
    },
    {
        image: imagesHasLicense.newArrivals[2],
        title: 'Smart Watch',
        price: 350,
    },
    {
        image: imagesHasLicense.newArrivals[3],
        title: 'Lipstick',
        price: 15,
    },
    {
        image: imagesHasLicense.newArrivals[4],
        title: 'Green plant',
        price: 550,
    },
    {
        image: imagesHasLicense.newArrivals[5],
        title: 'Bonsai tree',
        price: 530,
    },
];

export const GetNewArrivalsElement = ({ image, title, price }) => {
    return (
        <div className=" col col-xs-6 col-md-2 col-lg-2 col-gap">
            <div className="box-item-content">
                <Link to={pathPage.PRODUCT + converTitleToPath(title)}>
                    <div className="img-hold">
                        <ImageLoaded src={image} alt={title}></ImageLoaded>
                    </div>
                </Link>
                <Link to={pathPage.PRODUCT + converTitleToPath(title)}>
                    <h4>{title}</h4>
                </Link>
                <p>{formatPrice(price)}</p>
            </div>
        </div>
    );
};

export const staticElementHome = Object.freeze({
    topRatings: {
        data: topRatingsData,
        GetTopRatingsElement,
    },
    featuredBrands: {
        data: featureBrandsData,
        GetFeaturedBarndsElement,
    },
    newArrivals: {
        data: newArrivals,
        GetNewArrivalsElement,
    },
});

const listBrandCarsData = [
    {
        name: 'Cars',
        subData: [
            {
                image: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fferrari.png&w=32&q=75',
                title: 'Ferrari',
            },
            {
                image: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftesla.png&w=32&q=75',
                title: 'Tesla',
            },
            {
                image: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbmw.png&w=32&q=75',
                title: 'Bmw',
            },
            {
                image: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftoyota.png&w=32&q=75',
                title: 'Toyota',
            },
            {
                image: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fmini.png&w=32&q=75',
                title: 'Mini',
            },
            {
                image: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fford.png&w=32&q=75',
                title: 'Ford',
            },
        ],
    },
];

const listBrandsMobiPhoneData = [
    {
        name: 'Brands',
        subData: [
            {
                image: 'https://bonik-react.vercel.app/assets/images/brands/apple.png',
                title: 'Apple',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/brands/dell.png',
                title: 'Dell',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/brands/xiaomi.png',
                title: 'Xiaomi',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/brands/sony.png',
                title: 'Sony',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/brands/acer.png',
                title: 'Acer',
            },
        ],
    },
    {
        name: 'Shop',
        subData: [
            {
                image: 'https://bonik-react.vercel.app/assets/images/shops/herman%20miller.png',
                title: 'Keyboard Kiosk',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/shops/otobi.png',
                title: 'Anytime Buys',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/shops/hatil.png',
                title: 'Word Wide Wishes',
            },
            {
                image: 'https://bonik-react.vercel.app/assets/images/shops/steelcase.png',
                title: 'Cybershop',
            },
        ],
    },
];

export const staticDataListBrands = Object.freeze({
    listBrandCarsData,
    listBrandsMobiPhoneData,
});
