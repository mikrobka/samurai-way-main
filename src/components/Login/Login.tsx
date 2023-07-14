// import React from 'react';
// import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
// import {connect} from "react-redux";
// import {loginData} from "../../redux/auth-reducer";
// import {Redirect} from "react-router-dom";
// import {AppStateType} from "../../redux/store";
// import s from './LoginForm/LoginForm.module.css'
//
//
//
// type MapDispatchPropsType = {
//     loginData:(data:FormDataType)=>void
//
// }
//
// type MapStateToPropsType = {
//     isAuth:boolean
// }
//
// const MapStateToProps = (state:AppStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})
//
//  const Login = (props:MapDispatchPropsType & MapStateToPropsType) => {
//     const onSubmit = (formData:FormDataType) => {
//         props.loginData(formData)
//     }
//
//     if(props.isAuth){
//         return <Redirect to={'/profile'}/>
//     }
//
//     return (
//         <section className={s.login_form}>
//             <h1 className={s.title}>Login</h1>
//             <LoginReduxForm onSubmit={onSubmit}/>
//         </section>
//     );
// };
//
// export default connect(MapStateToProps,{loginData})(Login)

import { FC } from "react";
import { useForm } from "react-hook-form";
import {AppStateType} from "../../redux/store";
import s from './LoginForm.module.css';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginData} from "../../redux/auth-reducer";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type MapDispatchPropsType = {
    loginData:(data:FormDataType)=>void

}

type MapStateToPropsType = {
    isAuth:boolean
}

const MapStateToProps = (state:AppStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})

const Login: (props: (MapDispatchPropsType & MapStateToPropsType)) => (JSX.Element) = (props:MapDispatchPropsType & MapStateToPropsType) => {


    const requestLoginData = (data: FormDataType): void => {
       props.loginData(data)
    }

    const onSubmit = (data: FormDataType) => {
        requestLoginData(data);
    }

    if (props.isAuth) return <Redirect to="/profile" />;

    return (
        <section className={s.login_form}>
            <h1 className={s.title}>Login</h1>
            <LoginForm onSubmit={onSubmit}  />
        </section>
    )
}

type LoginFormType = {
    errorMessage?: object,
    onSubmit: (data: FormDataType) => void,
    captchaUrl?: string
}

const LoginForm: FC<LoginFormType> = ({errorMessage, onSubmit, captchaUrl}) => {
    const { register, handleSubmit, formState: {errors}, setError } = useForm({mode: 'onBlur'});


    return (
        // @ts-ignore
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li className={s.field}>
                    <input {...register("login", {required: 'Please enter your Email'})} type="text" placeholder="Login" autoComplete="on" />
                    {errors.email && <span className={s.error}>{errors.email.message}</span>}
                </li>
                <li className={s.field}>
                    <input {...register("password", {required: 'Please enter your password'})} type="password" placeholder="Password" />
                    {errors.password && <span className={s.error}>{errors.password.message}</span>}
                </li>
                <li className={s.field_remember}>
                    <input {...register("rememberMe")} type="checkbox"/>
                    <span>Remember me</span>
                </li>
                {errors.form && <span className={s.error}>{errors.form.message}</span>}
                <li>
                    <button className={s.login_btn}>Login</button>
                </li>
                {captchaUrl && <img src={captchaUrl} alt="Captcha" />}
                {captchaUrl && <input {...register("captcha")} type="text" placeholder="Symbols from picture"/>}
            </ul>
            <div className={s.account_info}>
                <a href="https://social-network.samuraijs.com/signUp" target="_blank">Don't have an account?</a>
                <a href="https://social-network.samuraijs.com/login" target="_blank">Forgot password?</a>
            </div>
        </form>
    )
}

export default connect(MapStateToProps,{loginData})(Login)