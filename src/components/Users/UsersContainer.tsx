
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/store";

import {followAC, InitialStateType, setUsers, unfollowAC, UserType} from "../../redux/usersReducer";
import {Users} from "./Users";





type mapStatePropsType = {
    usersPage:InitialStateType
}

type MapDispatchPropsType = {
    followUser:(userId:number) => void
    unfollowUser:(userId:number)=>void
    setUsers:(users:Array<UserType>)=>void
}

export type UsersPropsType = mapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        usersPage:state.usersPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return{

        followUser:(userId)=>{dispatch(followAC(userId))},
        unfollowUser:(userId)=>{dispatch(unfollowAC(userId))},
        setUsers:(users)=>{dispatch(setUsers(users))}
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)