const formatTextUpperCase = (valueStr = '') => {
    if (typeof valueStr !== 'string') {
        return console.log('value phải là một string');
    }

    return valueStr.substring(0, 1) + valueStr.substring(1);
};

export default formatTextUpperCase;
