import React from 'react';

import {FollowingProgressType, UserType} from "../../redux/usersReducer";
import {Paginator} from "./Paginator/Paginator";
import User from "../Users/User/User";


type UserPropsType = {
    pages: Array<number>
    onPageChanged: (p: number) => void
    currentPage: number
    users: Array<UserType>
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    followingInProgress: (followingInProgress: boolean, id: number) => void
    followProgress: Array<FollowingProgressType>

}

export const Users = (props: UserPropsType) => {

    return (
        <div>
            <Paginator pages={props.pages} onPageChange={props.onPageChanged} currentPage={props.currentPage}/>
            {props.users.map(u => <div key={u.id}><User user={u} followUser={props.followUser}
                                                        unfollowUser={props.unfollowUser}
                                                        isFollowingProgress={props.followProgress}/></div>)}
        </div>
    );
};

