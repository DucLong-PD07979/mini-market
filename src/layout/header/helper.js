import { EmailIcon, PhoneIcon } from '../../components/svg/IconSvg';
import { images } from '../../assets/images';
import * as yup from 'yup';

export const contactItems = [
    {
        icon: <PhoneIcon className="header-icon" />,
        label: '+88012 3456 7894',
    },
    {
        icon: <EmailIcon className="header-icon" />,
        label: 'support@ui-lib.com',
    },
];
// const formOption = { mode: 'obBlur', resolver: yupResolver(schema) };
export const traslateData = [
    {
        img: images.US,
        label: 'USD',
    },
    {
        img: images.BD,
        label: 'BD',
    },
    {
        img: images.HN,
        label: 'HN',
    },
];

export const currencyData = [
    {
        img: images.US,
        label: 'USD',
    },
    {
        img: images.BD,
        label: 'BDT',
    },
    {
        img: images.HN,
        label: 'INR',
    },
    {
        img: images.UC,
        label: 'EUR',
    },
];

// categories mẫu
export const CategoriesData = [
    {
        label: 'All Categories',
    },
    {
        label: 'Clothes',
    },
    {
        label: 'Car',
    },
    {
        label: 'Watch',
    },
    {
        label: 'Electronic',
    },
    {
        label: 'Laptop',
    },
];

// SearchProducts mẫu

export const SearchProducts = [
    {
        title: 'Macbook Air 13',
    },
    {
        title: 'Ksus K555LA',
    },
    {
        title: 'Acer Aspire X453',
    },
    {
        title: 'Ipad mini 3',
    },
];

// header form login schema
export const schema = yup
    .object({
        email: yup.string().required('Email is requied').email('Email is invalid'),
        password: yup
            .string()
            .required('Password is requied')
            .min(6)
            .max(32),
    })
    .required();
