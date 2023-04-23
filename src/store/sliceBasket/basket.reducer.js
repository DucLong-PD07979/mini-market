import * as type from './basket.type';
import { addProduct, removeItemProduct, removeProduct } from './basket.help';

const initialSate = {
    basket: [],
    toggle: false,
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
        default:
            return state;
    }
};

export default basketReducer;
