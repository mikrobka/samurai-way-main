import {AppStateType} from "./store";

export const getUsersPage = (state:AppStateType) => {
    return state.usersPage
}
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


