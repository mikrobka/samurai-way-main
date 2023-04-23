import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    auth:AuthType
}

export const  Header:React.FC<HeaderPropsType> = (props) => {
    return(

        <header className={s.header}>
            <img className={s.header_img}
                src="https://e7.pngegg.com/pngimages/437/592/png-clipart-emblem-logo-brand-product-small-mechanical-nuts-emblem-logo.png"
            alt={"Not found"}/>

            <div className={s.loginBlock}>
                {props.auth.isAuth ? <div>{props.auth.login}</div> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
 }