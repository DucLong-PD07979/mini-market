import * as type from './basket.type';

export const basket_add_product = (payload) => {
    return {
        type: type.BASKET_ADD_PRODUCT,
        payload,
    };
};

export const basket_remove_product = (payload) => {
    return {
        type: type.BASKET_REMOVE_PRODUCT,
        payload,
    };
};

export const basket_toggle = (payload) => {
    return {
        type: type.BASKET_TOGGLE,
        payload,
    };
};

export const basket_remove_item_product = (payload) => {
    return {
        type: type.BASKET_REMOVE_ITEM_PRODUCT,
        payload,
    };
};
