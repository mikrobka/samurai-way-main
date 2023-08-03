import React, {useEffect} from 'react';

import {FollowingProgressType, UserType} from "../../redux/usersReducer";
import {Paginator} from "./Paginator/Paginator";
import User from "../Users/User/User";
import s from './Users.module.css'


type UserPropsType = {
    setCurrentPage: (p: number) => void
    users: Array<UserType>
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    followProgress: Array<FollowingProgressType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    changePage: (currentPage: number) => void


}

export const Users = (props: UserPropsType) => {

    useEffect(() => {
        props.changePage(props.currentPage)
    }, [props.currentPage])

    return (
        <div>
            <h2 className={s.title}>Users</h2>
            <ul className={s.users}>
                {props.users.map(u => <div key={u.id}><User user={u} followUser={props.followUser}
                                                            unfollowUser={props.unfollowUser}
                                                            isFollowingProgress={props.followProgress}/></div>)}
            </ul>
            <ul className={s.pages}>
                <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           setCurrentPage={props.setCurrentPage}
                />
            </ul>
        </div>
    );
};

