export const numberRandom = (min, max) => {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw Error('type not a number');
    }
    return Math.random() * (max - min) + min;
};
