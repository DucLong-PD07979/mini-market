import React, { useEffect, useState } from 'react';

const useDebonce = (value = '', timeDelay = 600) => {
    const [valueDelay, setValueDelay] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setValueDelay(value);
        }, timeDelay);
    }, [value, timeDelay]);

    return [valueDelay];
};

export default useDebonce;
