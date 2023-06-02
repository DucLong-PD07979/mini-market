import { get } from '../../util/helper/api';

const fetchCategories = () => {
    try {
        let res = get('categories');
        return res;
    } catch (error) {
        console.log(error);
    }
};

const fetchSearchProducts = (value, categorieID = '1') => {
    try {
        let res = get(`products/?title=${value}&offset=0&limit=5`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const fetchFlashProducts = () => {
    const randomNumber = 0;
    const itemsLimit = randomNumber + 8;
    try {
        let res = get(
            `products/?categoryId=1&offset=${randomNumber}&limit=${itemsLimit}`,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};

const fetchCarsProducts = () => {
    const randomNumber = 0;
    const itemsLimit = randomNumber + 9;
    try {
        let res = get(
            `products/?categoryId=1&offset=${randomNumber}&limit=${itemsLimit}`,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};

const fetchRecommentForYou = () => {
    try {
        let res = get(`products/?categoryId=1&offset=${0}&limit=${12}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const fetchSingleProduct = (id = 0) => {
    return function () {
        try {
            let res = get(`products/${id}`);
            return res;
        } catch (error) {
            console.log(error);
        }
    };
};

const fetchProductRealted = (idCategories = 1) => {
    return function () {
        try {
            let res = get(`products/?categoryId=${idCategories}&offset=${0}&limit=${4}`);
            return res;
        } catch (error) {
            console.log(error);
        }
    };
};

export {
    fetchCategories,
    fetchSearchProducts,
    fetchFlashProducts,
    fetchCarsProducts,
    fetchRecommentForYou,
    fetchSingleProduct,
    fetchProductRealted,
};
