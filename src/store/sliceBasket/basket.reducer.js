import * as type from './basket.type';
import {
    addProduct,
    removeItemProduct,
    removeProduct,
} from './basket.help';

const initialSate = {
    basket: [],
    toggle: false,
    idSingleProduct: null,
};

const basketReducer = (state = initialSate, action) => {
    switch (action.type) {
        case type.BASKET_ADD_PRODUCT:
            return {
                ...state,
                basket: addProduct(state.basket, action.payload),
            };
        case type.BASKET_REMOVE_PRODUCT:
            return {
                ...state,
                basket: removeProduct(state.basket, action.payload),
            };
        case type.BASKET_TOGGLE:
            return {
                ...state,
                toggle: action.payload,
            };
        case type.BASKET_REMOVE_ITEM_PRODUCT:
            return {
                ...state,
                basket: removeItemProduct(state.basket, action.payload),
            };
        case type.GET_ID_SINGLE_PRODUCT:
            const id = action.payload;
            return {
                ...state,
                idSingleProduct: id,
            };
        default:
            return state;
    }
};

export default basketReducer;
