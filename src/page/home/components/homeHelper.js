import { images } from '../../../assets/images';
import Button from '../../../components/button/Button';
import ImageLoaded from '../../../components/imageLoaded/ImageLoaded';

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

const GetFlashSilderElement = ({ title, price, images }) => {
    return (
        <div className="silder-item-content">
            <div className="silder-item-box">
                <img src={images} alt="s" />
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    );
};

export const silderDataHome = Object.freeze({
    silderHero: {
        data: silderHeroBannerData,
        GetHeroSliderElement,
    },
    silderFlash: {
        GetFlashSilderElement,
    },
});
