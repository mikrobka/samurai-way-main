import React from 'react';
import s from "./Users.module.css";
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    pages:Array<number>
    onPageChanged:(p:number)=>void
    currentPage:number
    usersPage:InitialStateType
    unfollowUser:(id:number)=>void
    followUser:(id:number)=>void
}

export const Users = (props:UserPropsType) => {
    return (
        <div>
            <div>
                {props.pages.map(p =>  <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>)}
            </div>

            {props.usersPage.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <div><img className={s.avatar} src={u.photos.small && u.photos.large} alt=""/></div>
                    </NavLink>
                    {u.followed ? <button onClick={() => props.unfollowUser(u.id)}>Unfollow</button> : <button onClick={() => props.followUser(u.id)}>Follow</button>}
                </div>
                <div>
                    <div>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </div>
                    <div>
                        <div>
                            {"u.location.city"}
                        </div>
                        <div>
                            {"u.location.country"}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

