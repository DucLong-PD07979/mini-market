import React from 'react';
import { categoriesItem } from '../helper';
import MenuItem from './MenuItem';

const CategoriesList = (props) => {
    return (
        <div>
            <ul className={'categories-list'}>
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

export default CategoriesList;
