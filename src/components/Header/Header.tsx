import React from "react";
import s from "./Header.module.css"
import {NavLink, Redirect, Route} from "react-router-dom";
import {InitialStateType} from "../../redux/auth-reducer";
import logo from '../../assets/logo.svg'

type HeaderPropsType = {
    auth: InitialStateType
    logoutData: () => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (

        <header className={s.header}>
            <div>
                <img src={logo} alt=""/>
                <h3>Social Network</h3>
            </div>
            <div className={s.login_block}>
                {props.auth.isAuth ?
                    <div className={s.logout}>
                        <p>{props.auth.login}</p>
                        <button onClick={props.logoutData}>Logout</button>
                    </div> :
                    <NavLink className={s.login_btn} to="/login">Login</NavLink>
                }
            </div>

        </header>
    );
}