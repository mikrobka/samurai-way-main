import {AppStateType} from "./store";
import {createSelector} from "reselect";

export const getUsersPage = (state:AppStateType) => {
    return state.usersPage
}

export const getUsersSuper = createSelector(getUsersPage,(users) => {
    return users.users
})
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowProgress = (state:AppStateType) => {
    return state.usersPage.followProgress
}


