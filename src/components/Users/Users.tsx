import React from 'react';
import s from "./Users.module.css";
import {followingInProgress, FollowingProgressType, InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

import { followAPI} from "../../api/api";
import User from "./User/User";

type UserPropsType = {
    pages: Array<number>
    onPageChanged: (p: number) => void
    currentPage: number
    usersPage: InitialStateType
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    followingInProgress:(followingInProgress:boolean,id:number)=>void
    followProgress:Array<FollowingProgressType>

}

export const Users = (props: UserPropsType) => {

    return (
        <div>
            <div>
                {props.pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                            className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>)}
            </div>

            {props.usersPage.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <div><img className={s.avatar} src={u.photos.small && u.photos.large} alt=""/></div>
                    </NavLink>
                    {u.followed ? <button disabled={props.followProgress.some(id => id.id === u.id)} onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                    : <button disabled={props.followProgress.some(id => id.id === u.id)} onClick={() => props.followUser(u.id)}>Follow</button>}

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

