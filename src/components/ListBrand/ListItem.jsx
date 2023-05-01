import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageLoaded from '../imageLoaded/ImageLoaded';

const ListItem = ({ subDataActive = 0, data = [], isViewAll, ...props }) => {
    return (
        <ul className={`list-brands ${isViewAll && 'list-brands-view-all'}`}>
            {data[subDataActive].subData.length > 0 &&
                data[subDataActive].subData.map((item, index) => {
                    return (
                        <li key={index} className="list-brands-item">
                            <Link>
                                <ImageLoaded
                                    src={item.image}
                                    alt={item.title}
                                ></ImageLoaded>
                                <span className="list-title">{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
};

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    subDataActive: PropTypes.number.isRequired,
    isViewAll: PropTypes.bool,
};

export default ListItem;
