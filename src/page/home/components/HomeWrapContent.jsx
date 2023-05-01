import React from 'react';
import PropTypes from 'prop-types';
import HomeHeaderItem from './HomeHeaderItem';
const HomeWrapContent = ({ className, children, ...props }) => {
    return (
        <div className="home-wrap-content">
            <div className={className}>
                <HomeHeaderItem IconLabel={props.IconLabel} title={props.title} />
                {children}
            </div>
        </div>
    );
};

HomeWrapContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    IconLabel: PropTypes.func,
    title: PropTypes.string.isRequired
};

export default HomeWrapContent;
