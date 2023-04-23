import { createSelector } from 'reselect';

const basketSelector = (state) => state.basket;

export const basketSelect = createSelector(basketSelector, ({ basket }) => {
    return basket;
});

export const quanityProduct = createSelector(basketSelector, ({ basket }) => {
    return basket.length;
});

export const basketToggle = createSelector(basketSelector, ({ toggle }) => {
    return toggle;
});

export const totalMoneySelect = createSelector(basketSelector, ({ basket }) => {
    return basket.reduce((total, product) => {
        const totalItem = product.price * product.quanity;
        return (total += totalItem);
    }, 0);
});
