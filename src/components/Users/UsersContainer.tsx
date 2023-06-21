import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    followingInProgress, FollowingProgressType, followUser, getUser,
    InitialStateType, setPage,
     unfollowUser,

} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersPage
} from "../../redux/users-selectors";
type mapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followProgress:Array<FollowingProgressType>


}
type MapDispatchPropsType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setPage: (currentPage: number) => void
    followingInProgress:(followProgress:boolean,id:number)=>void
    getUser: (currentPage:number,pageSize:number) =>void
}

export type UsersPropsType = mapStatePropsType & MapDispatchPropsType


export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUser(currentPage,this.props.pageSize)

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [1]
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        {
            return (
                <>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Users  pages={pages} onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                           followUser={this.props.followUser} usersPage={this.props.usersPage}
                           unfollowUser={this.props.unfollowUser} followingInProgress={this.props.followingInProgress}
                            followProgress={this.props.followProgress}
                    />
                </>
            );
        }
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress:getFollowProgress(state)
    }
}


export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps,
    {
        followUser,
        unfollowUser,
        setPage,
        followingInProgress,
        getUser
    }))(UsersClassComponent)
