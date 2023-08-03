import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    followingInProgress, FollowingProgressType, followUser, getUser,
    InitialStateType, setPage,
    unfollowUser, UserType,

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
    getTotalUsersCount, getUsersPage, getUsersSuper
} from "../../redux/users-selectors";

type mapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followProgress: Array<FollowingProgressType>


}
type MapDispatchPropsType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setPage: (currentPage: number) => void
    followingInProgress: (followProgress: boolean, id: number) => void
    getUser: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStatePropsType & MapDispatchPropsType


export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (currentPage: number) => {
        this.props.getUser(currentPage, this.props.pageSize)

    }

    render() {
        {
            return (
                <>
                    {this.props.isFetching ? <Preloader/> : null}
                    <Users
                        changePage={this.onPageChanged}
                        setCurrentPage={this.props.setPage}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        followUser={this.props.followUser} users={this.props.users}
                        unfollowUser={this.props.unfollowUser}
                        followProgress={this.props.followProgress}
                    />
                </>
            );
        }
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress: getFollowProgress(state)
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
