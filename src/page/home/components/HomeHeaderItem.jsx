import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ArrowRightBoldIcon } from '../../../components/svg/IconSvg';
import { Link } from 'react-router-dom';
import * as pathPage from '../../../util/constants/router';

const HomeHeaderItem = ({ IconLabel, title, ...props }) => {
    const cs = classNames;

    return (
        <div className={cs('header-wrap')}>
            <div className={cs('header-title')}>
                <IconLabel className={cs('header-title-icon')} />
                <span>{title}</span>
            </div>
            <Link to={pathPage.HOME} className={cs('header-view-all')}>
                View all
                <ArrowRightBoldIcon className={cs('header-view-icon')} />
            </Link>
        </div>
    );
};

HomeHeaderItem.propTypes = {
    IconLabel: PropTypes.func,
    title: PropTypes.string.isRequired,
};

export default HomeHeaderItem;
