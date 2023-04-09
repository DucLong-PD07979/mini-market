import { useState } from 'react';

const useModal = () => {
    const [isShow, setIsShow] = useState(false);

    const handleTogleModal = (e) => {
        // e.stopPropagation();
        setIsShow(!isShow);
    };

    const handleCLoseModal = (e) => {
            setIsShow(false);
    };

    return {
        isShow,
        handleTogleModal,
        handleCLoseModal,
    };
};

export default useModal;
