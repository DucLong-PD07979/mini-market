import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import MenuItems from './MenuItems';
import { images } from '../../../assets/images';

const MenuDrop = ({ icon, title, itemsData, src = images.US, ...props }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="menu-drop-wrap">
            <HeaderMenu icon={icon} title={title} src={src} handleToggle={handleToggle} />
            <MenuItems itemsData={itemsData} toggle={toggle} />
        </div>
    );
};

MenuDrop.propTypes = {
    icon : PropTypes.bool,
    title : PropTypes.string,
    itemsData: PropTypes.array,
    src: PropTypes.string
};

export default MenuDrop;
