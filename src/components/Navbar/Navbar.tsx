import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink
                        style={(isActive) => ({fontWeight: isActive ? '700' : '500'})}
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={(isActive) => ({fontWeight: isActive ? '700' : '500'})}
                        to="/dialogs"
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={(isActive) => ({fontWeight: isActive ? '700' : '500'})}
                        to="/users"
                    >
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={(isActive) => ({fontWeight: isActive ? '700' : '500'})}
                        to="/news"
                    >
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={(isActive) => ({fontWeight: isActive ? '700' : '500'})}
                        to="/music"
                    >
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={(isActive) => ({fontWeight: isActive ? '700' : '500'})}
                        to="/chat"
                    >
                        Chat
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export function Navbar() {
    const isLogin = useSelector<AppStateType, boolean>((state) => state.auth.isAuth);

    return isLogin ? <Nav/> : null;
}
