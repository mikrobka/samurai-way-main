import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {loginData} from "../../redux/auth-reducer";

export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
            debugger
            loginData(formData)
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

