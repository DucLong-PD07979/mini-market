import { get } from '../../util/helper/api';

const fetchCategories = () => {
    try {
        let res = get('categories', {});
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

export { fetchCategories, fetchSearchProducts, fetchFlashProducts };
