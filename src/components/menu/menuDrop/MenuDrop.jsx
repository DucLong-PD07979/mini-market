import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import MenuItems from './MenuItems';

const MenuDrop = ({ icon, title, itemsData, src = false, getTitle, ...props }) => {
    const [toggle, setToggle] = useState(false);
    const [titleName, setTitleName] = useState(title);
    const [image, setImage] = useState(src);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleFocusItem = () => {
        setToggle(false);
    };

    // label và name dùng cho mockup or dữ liệu của api trả về
    const handleSetValueHeaderMenu = useCallback(
        (to, label, src, name) => {
            if (name) {
                setTitleName(name);
                getTitle(name);
            }

            if (label) {
                setTitleName(label);
                getTitle(name);
            }

            if (src) {
                setImage(src);
            }

            handleFocusItem();
        },
        [getTitle],
    );

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
                handleSetValueHeaderMenu={handleSetValueHeaderMenu}
            />
        </div>
    );
};

MenuDrop.propTypes = {
    icon: PropTypes.bool,
    title: PropTypes.string.isRequired,
    itemsData: PropTypes.array.isRequired,
    src: PropTypes.string,
    getTitle: PropTypes.func,
};

export default MenuDrop;
