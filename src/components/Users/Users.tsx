import React from 'react';
import s from "./Users.module.css";
import {followingInProgress, FollowingProgressType, InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

import { followAPI} from "../../api/api";

type UserPropsType = {
    pages: Array<number>
    onPageChanged: (p: number) => void
    currentPage: number
    usersPage: InitialStateType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress:(followingInProgress:boolean,id:number)=>void
    followProgress:Array<FollowingProgressType>

}

export const Users = (props: UserPropsType) => {


    const Follow = (id: number) => {
        props.followingInProgress(true,id)
       followAPI.follow(id).then(res => {
           console.log(props.followProgress)
            if (res.data.resultCode === 0) {
                props.follow(id)
                props.followingInProgress(false,id)
            }
        })
    }
    const Unfollow = (id: number) => {
        props.followingInProgress(true,id)
        followAPI.unfollow(id).then(res => {
            if (res.data.resultCode === 0) {
                props.unfollow(id)
                props.followingInProgress(false,id)
            }
        })
    }
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
                    {u.followed ? <button disabled={props.followProgress.some(id => id.id === u.id)} onClick={() => Unfollow(u.id)}>Unfollow</button>
                    : <button disabled={props.followProgress.some(id => id.id === u.id)} onClick={() => Follow(u.id)}>Follow</button>}

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

