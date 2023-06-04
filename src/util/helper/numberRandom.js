export const numberRandom = (min, max) => {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw Error('type not a number');
    }

    if (min && !max) {
        return Math.random() * 1 + min;
    }

    return Math.random() * (max - min) + min;
};
