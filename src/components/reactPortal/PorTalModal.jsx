import React from 'react';
import { createPortal } from 'react-dom';
import { createElementApendChildren } from './helperPortal';

const PorTalModal = ({ children, wrapperElementID = 'portal-root' }) => {
    let element = document.getElementById(wrapperElementID);
    if (!element) {
        element = createElementApendChildren(wrapperElementID);
    }
    return createPortal(children, element);
};

export default PorTalModal;
