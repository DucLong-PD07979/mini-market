import React, { useState } from 'react';
import Description from './Description';
import Review from './Review';
import { userCommentData } from '../helper';

const DescriptionAndReview = (props) => {
    const [contentActive, setContentActive] = useState('description');
    const [useCommentData] = useState(userCommentData);

    return (
        <div className="description-and-review-wrap">
            <div className="container">
                <div className="navigation-bar">
                    <h5
                        className={
                            contentActive === 'description' ? 'content-active' : null
                        }
                        onClick={(e) => setContentActive('description')}
                    >
                        Description
                    </h5>
                    <h5
                        className={contentActive === 'review' ? 'content-active' : null}
                        onClick={(e) => setContentActive('review')}
                    >
                        Review <span>(3)</span>
                    </h5>
                </div>
                <div className="content-details">
                    {contentActive === 'description' && <Description />}
                    {contentActive === 'review' && (
                        <Review dataComments={useCommentData} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DescriptionAndReview;
