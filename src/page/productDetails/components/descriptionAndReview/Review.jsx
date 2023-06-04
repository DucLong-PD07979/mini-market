import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../components/avatar/Avatar';
import StarRating from '../../../../components/starRating/StarRating';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../../../components/button/Button';

const Review = ({ dataComments }) => {
    const schema = yup
        .object({
            feedback: yup.string().required('required'),
        })
        .required();
    const formOption = { mode: 'onBlur', resolver: yupResolver(schema) };

    const {
        register,
        formState: { errors },
    } = useForm(formOption);

    const [valueUserFeedback, setValueUserFeedback] = useState('');

    const handleGetValueUserFeedback = (e) => {
        setValueUserFeedback(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
    };

    return (
        <div className="review-wrap">
            <div className="users-comment">
                {dataComments.length > 0 &&
                    dataComments.map((user, index) => {
                        return (
                            <div className="user-comment-details" key={index}>
                                <div className="user-infor">
                                    <Avatar
                                        image={user.image}
                                        rouded_full={true}
                                        alt={user.authorName + 'avtar'}
                                    />
                                    <div className="name-and-rate">
                                        <h4>{user.authorName}</h4>
                                        <div className="info-rate-box">
                                            <StarRating rate={user.rate} />
                                            <h6>{user.rate}</h6>
                                            <span>{user.timePost}</span>
                                        </div>
                                    </div>
                                </div>
                                <p>{user.comment}</p>
                            </div>
                        );
                    })}
            </div>
            <h2>Write a Review for this product</h2>
            <form action="" id="user-feedback">
                <div className="form-group">
                    <label>
                        Your Rating <span>*</span>
                    </label>
                    <StarRating rate={0} modelSelect={true} />
                </div>
                <div className="form-group">
                    <label>
                        Your Review <span>*</span>
                    </label>
                    <textarea
                        name="feedback"
                        autoComplete="feedback"
                        errors={errors}
                        {...register('feedback', { required: true })}
                        row="30"
                        col="8"
                        cols="60"
                        rows="10"
                        id="feedback-field"
                        value={valueUserFeedback}
                        onChange={(e) => handleGetValueUserFeedback(e)}
                    ></textarea>
                    {errors?.feedback && (
                        <p className="error-mes">{errors.feedback?.message}</p>
                    )}
                </div>
                <Button
                    rouded_sx={true}
                    disable={valueUserFeedback ? false : true}
                    className={'btn-submit'}
                    onClick={handleSubmitForm}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

Review.propTypes = {
    dataComments: PropTypes.array.isRequired,
};

export default memo(Review);
