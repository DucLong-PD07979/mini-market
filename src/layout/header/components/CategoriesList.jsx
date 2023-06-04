import React from 'react';
import { categoriesItem } from '../helper';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const CategoriesList = ({ className, ...props }) => {
    return (
        <div>
            <ul className={className}>
                {categoriesItem.length > 0 &&
                    categoriesItem.map((item, index) => (
                        <MenuItem
                            className="categories-list"
                            index={index}
                            key={index}
                            {...item}
                        />
                    ))}
            </ul>
        </div>
    );
};

CategoriesList.propTypes = {
    className: PropTypes.string,
};

export default CategoriesList;
