import React from 'react';
import className from 'classnames';
import FieldText from '../../../components/fieldText/FieldText';
import FieldPassword from '../../../components/fieldPassword/FieldPassword';
import { Link } from 'react-router-dom';
import * as path from '../../../util/constants/router';
import Button from '../../../components/button/Button';
import { FaceBookIcon, GoogleIcon } from '../../../components/svg/IconSvg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../helper';

const HeaderForm = ({ handleCLoseModal }) => {
    const cs = className;
    const formOption = { mode: 'onBlur', resolver: yupResolver(schema) };

    const {
        register,
        formState: { errors },
    } = useForm(formOption);

    const handleSubmit = (e) => {
        if (e.preventDefault) e.preventDefault();
    };

    const handleSwitchPage = (e) => {
        handleCLoseModal();
    };

    return (
        <div className={cs('header-form-wrap')}>
            <form action="" id={cs('form-content')}>
                <h3 className={cs('header-form-title')}>Wellcome to Ecommerce</h3>
                <p className={cs('header-form-des')}>Log in with email & password</p>
                <FieldText
                    placeholder="example@email.com"
                    label="Email or Phone Number"
                    name="email"
                    autoComplete="email"
                    register={register}
                    errors={errors}
                ></FieldText>
                <FieldPassword
                    placeholder="**************"
                    label="password"
                    name="password"
                    autoComplete="current-password"
                    register={register}
                    errors={errors}
                ></FieldPassword>
                <Button
                    primary={true}
                    rouded_sx={true}
                    disable={true}
                    type="submit"
                    onClick={handleSubmit}
                    className={cs('btn-signup')}
                >
                    Login
                </Button>
                <div className={cs('party-wall-wrap')}>
                    <span>On</span>
                    <div className={cs('party-wall-line')}></div>
                </div>
                <Button
                    className={'btn-signup btn-signup-fa'}
                    rouded_sx={true}
                    type="button"
                >
                    <FaceBookIcon /> <span>Continue with Facebook</span>
                </Button>
                <Button
                    className={'btn-signup btn-signup-go'}
                    rouded_sx={true}
                    type="button"
                >
                    <GoogleIcon /> <span>Continue with google</span>
                </Button>
                <div className={cs('not-account-alert-wrap')}>
                    <span>Dont have account ?</span>
                    <Link
                        to={path.REGISTER}
                        className={cs('link-item-under')}
                        onClick={handleSwitchPage}
                    >
                        Sing up
                    </Link>
                </div>
            </form>
            <div className="footer-form-wrap">
                <span>Forgot your password?</span>
                <Link
                    to={path.HOME}
                    className={cs('link-item-under')}
                    onClick={handleSwitchPage}
                >
                    Reset It
                </Link>
            </div>
        </div>
    );
};

export default HeaderForm;
