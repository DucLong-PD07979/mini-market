import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import MenuItems from './MenuItems';

const MenuDrop = ({ icon, title, itemsData, src = false, ...props }) => {
    const [toggle, setToggle] = useState(false);
    const [titleName, setTitleName] = useState(title);
    const [image, setImage] = useState(src);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="menu-drop-wrap">
            <HeaderMenu
                icon={icon}
                title={titleName}
                src={image || src}
                handleToggle={handleToggle}
            />
            <MenuItems
                itemsData={itemsData}
                toggle={toggle}
                setTitle={setTitleName}
                setImage={setImage}
            />
        </div>
    );
};

MenuDrop.propTypes = {
    icon: PropTypes.bool,
    title: PropTypes.string.isRequired,
    itemsData: PropTypes.array.isRequired,
    src: PropTypes.string,
};

export default MenuDrop;
