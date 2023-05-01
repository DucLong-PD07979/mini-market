import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListBrandHeader from './ListBrandHeader';
import ListItem from './ListItem';
import Button from '../button/Button';

const ListBrandRepesent = ({ data = [], ...props }) => {
    const [listBrandDataActive, setListBrandDataActive] = useState(0);
    const [isViewAll, setIsViewAll] = useState(false);

    const handleGetItemActive = (index) => {
        setListBrandDataActive(index);
    };

    const handleSetViewAll = () => {
        setIsViewAll((prev) => !prev);
    };
    return (
        <div className="listBrand-wrap">
            {data.length >= 2 && (
                <ListBrandHeader
                    data={data}
                    subDataActive={listBrandDataActive}
                    getItemActive={handleGetItemActive}
                />
            )}
            <ListItem
                data={data}
                subDataActive={listBrandDataActive}
                isViewAll={isViewAll}
            />
            <Button className={'btn-view-all'} onClick={handleSetViewAll}>
                View All Brands
            </Button>
        </div>
    );
};

ListBrandRepesent.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ListBrandRepesent;
