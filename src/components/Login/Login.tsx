import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginData} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";



type MapDispatchPropsType = {
    loginData:(data:FormDataType)=>void

}

type MapStateToPropsType = {
    isAuth:boolean
}

const MapStateToProps = (state:AppStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})

 const Login = (props:MapDispatchPropsType & MapStateToPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.loginData(formData)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <a href={'https://social-network.samuraijs.com/signUp'} >Sign Up</a>
        </div>
    );
};

export default connect(MapStateToProps,{loginData})(Login)