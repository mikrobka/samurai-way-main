import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthType, InitialStateType, logoutData} from "../../redux/auth-reducer";

type HeaderPropsType = {
    auth:InitialStateType
    logoutData:()=>void
}

export const  Header:React.FC<HeaderPropsType> = (props) => {
    return(

        <header className={s.header}>
            <img className={s.header_img}
                src="https://e7.pngegg.com/pngimages/437/592/png-clipart-emblem-logo-brand-product-small-mechanical-nuts-emblem-logo.png"
            alt={"Not found"}/>

            <div className={s.loginBlock}>
                {props.auth.isAuth ? <div>{props.auth.login} - <NavLink to={'/login'} onClick={props.logoutData}>Log out</NavLink></div> : <NavLink  to={'/login'}>Log in</NavLink> }
            </div>

        </header>
    );
 }