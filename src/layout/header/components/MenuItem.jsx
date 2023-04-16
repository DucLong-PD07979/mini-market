import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../../components/svg/IconSvg';
import Wrapper from '../../../components/wrapper/Wrapper';

const MenuItem = ({ className, name, iconLabel, subItems, index }) => {
    const cs = classNames;
    const [indexActive, setIndexActive] = useState(null);

    const handleMoveEnter = (index) => {
        setIndexActive(index);
    };

    const handleMoveLeave = (subItems) => {
        setIndexActive(null);
    };

    return (
        <li
            className={className + '-item'}
            onMouseEnter={(e) => handleMoveEnter(index)}
            onMouseLeave={(e) => handleMoveLeave()}
        >
            <Link to={'/'} className={className + '-item-link'}>
                {iconLabel}
                <span className="item-name">{name}</span>
                {subItems && <ArrowRightIcon />}
            </Link>
            {subItems && (
                <Wrapper className="wrapper-list">
                    <ul className={className + `-children`}>
                        {subItems.map((item, index) => {
                            return (
                                <MenuItem className={className} key={index} {...item} />
                            );
                        })}
                    </ul>
                </Wrapper>
            )}
        </li>
    );
};

export default MenuItem;
