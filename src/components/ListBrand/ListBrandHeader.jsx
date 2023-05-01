import React from 'react';
import PropTypes from 'prop-types';

const ListBrandHeader = ({ ...props }) => {
    const { data = [], getItemActive, subDataActive = 0 } = props;
    return (
        <div className="listBrandHeader">
            {data.length > 0 &&
                data.map((item, index) => {
                    return index < data.length - 1 ? (
                        <React.Fragment key={index}>
                            <div
                                className={`title ${
                                    subDataActive === index && 'title-active'
                                }`}
                                onClick={(e) => getItemActive(index)}
                            >
                                {item.name}
                            </div>
                            <div className="separate">|</div>
                        </React.Fragment>
                    ) : (
                        <div
                            className={`title ${
                                subDataActive === index && 'title-active'
                            }`}
                            key={index}
                            onClick={(e) => getItemActive(index)}
                        >
                            {item.name}
                        </div>
                    );
                })}
        </div>
    );
};

ListBrandHeader.propTypes = {
    data: PropTypes.array.isRequired,
    getItemActive: PropTypes.func.isRequired,
    subDataActive: PropTypes.number.isRequired,
};

export default ListBrandHeader;
