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
    // let queryTitle = { params: { title: value } };
    // products/?title=${value}&categoryId=${categorieID}&offset=0&limit=5
    try {
        let res = get(`products/?title=${value}&offset=0&limit=5`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export { fetchCategories, fetchSearchProducts };
