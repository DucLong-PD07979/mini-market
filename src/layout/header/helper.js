import {
    ComputerIcon,
    EmailIcon,
    FashionIcon,
    GiftIcon,
    LightbuldIcon,
    MetalHealthIcon,
    MotoBikeIcon,
    MusicIcon,
    PhoneIcon,
    StoreIcon,
} from '../../components/svg/IconSvg';
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
        password: yup.string().required('Password is requied').min(6).max(32),
    })
    .required();

let subItems = [
    {
        name: 'Shirt',
        type: 'Man Clothes',
    },
    {
        name: 'T-Shirt',

        type: 'Man Clothes',
    },
    {
        name: 'Pant',
        type: 'Man Clothes',
    },
    {
        name: 'Underwear',

        type: 'Man Clothes',
    },
    {
        name: 'Shirt',
        type: 'Accessories',
    },
    {
        name: 'T-Shirt',

        type: 'Accessories',
    },
    {
        name: 'Pant',
        type: 'Accessories',
    },
    {
        name: 'Underwear',

        type: 'Accessories',
    },
    {
        name: 'Shirt',
        type: 'Shoes',
    },
    {
        name: 'T-Shirt',

        type: 'Shoes',
    },
    {
        name: 'Pant',
        type: 'Shoes',
    },
    {
        name: 'Underwear',

        type: 'Shoes',
    },
    {
        name: 'Shirt',
        type: 'Bags',
    },
    {
        name: 'T-Shirt',

        type: 'Bags',
    },
    {
        name: 'Pant',
        type: 'Bags',
    },
    {
        name: 'Underwear',

        type: 'Bags',
    },
];
export const categoriesItem = [
    {
        name: 'fashion',
        iconLabel: <FashionIcon />,
        subItems: subItems,
    },
    {
        name: 'Electronics',
        iconLabel: <ComputerIcon />,
        subItems: subItems,
    },
    {
        name: 'Furniture',
        iconLabel: <LightbuldIcon />,
        subItems: subItems,
    },
    {
        name: 'Shoes',
        iconLabel: <GiftIcon />,
        subItems: [
            {
                name: 'Subitem 4.1',
                subItems: [{ name: 'Subitem 4.1.1' }, { name: 'Subitem 4.1.2' }],
            },
            { name: 'Subitem 4.2' },
        ],
    },
    {
        name: 'Music',
        iconLabel: <MusicIcon />,
        subItems: [
            {
                name: 'Subitem 5.1',
                subItems: [{ name: 'Subitem 5.1.1' }, { name: 'Subitem 5.1.2' }],
            },
            { name: 'Subitem 5.2' },
        ],
    },
    {
        name: 'Motorbike',
        iconLabel: <MotoBikeIcon />,
        subItems: [
            {
                name: 'Subitem 5.1',
                subItems: [{ name: 'Subitem 5.1.1' }, { name: 'Subitem 5.1.2' }],
            },
            { name: 'Subitem 5.2' },
        ],
    },
    {
        name: 'Metal-health',
        iconLabel: <MetalHealthIcon />,
        subItems: [
            {
                name: 'Subitem 5.1',
                subItems: [{ name: 'Subitem 5.1.1' }, { name: 'Subitem 5.1.2' }],
            },
            { name: 'Subitem 5.2' },
        ],
    },
    {
        name: 'Others',
        iconLabel: <StoreIcon />,
        subItems: [
            {
                name: 'Subitem 5.1',
                subItems: [{ name: 'Subitem 5.1.1' }, { name: 'Subitem 5.1.2' }],
            },
            { name: 'Subitem 5.2' },
        ],
    },
];

export const menuItemsData = [
    {
        name: 'home',
        path: '/',
        subItem: [
            {
                name: 'home - 1',
                path: '/',
            },
        ],
    },
    {
        name: 'page',
        path: '/',
        subItem: [
            {
                name: 'page - 1',
                path: '/',
            },
        ],
    },
    {
        name: 'viewer',
        path: '/',
        subItem: [
            {
                name: 'page - 1',
                path: '/',
            },
        ],
    },
    {
        name: 'User Account',
        path: '/',
        subItem: [
            {
                name: 'User Account - 1',
                path: '/',
            },
        ],
    },
    {
        name: 'Profile',
        path: '/',
        subItem: [
            {
                name: 'Profile - 1',
                path: '/',
            },
        ],
    },
];
