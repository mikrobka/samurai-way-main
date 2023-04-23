import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow, followingInProgress, FollowingProgressType,
    InitialStateType, setPage, setTotalUsersCount, setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import { usersAPI} from "../../api/api";
type mapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followProgress:Array<FollowingProgressType>


}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress:(followProgress:boolean,id:number)=>void
}
export type UsersPropsType = mapStatePropsType & MapDispatchPropsType


export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalCount)
        });
    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(currentPage)
        usersAPI.getUsers(currentPage,this.props.pageSize).then(response => {
            this.props.setUsers(response.items)
            this.props.toggleIsFetching(false)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        {
            return (
                <>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Users  pages={pages} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                           follow={this.props.follow} usersPage={this.props.usersPage}
                           unfollow={this.props.unfollow} followingInProgress={this.props.followingInProgress}
                            followProgress={this.props.followProgress}
                    />
                </>
            );
        }
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress:state.usersPage.followProgress
    }
}


export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setPage,
        setTotalUsersCount,
        toggleIsFetching,
        followingInProgress
    })
(UsersClassComponent)