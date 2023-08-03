import {ThunkAction} from "redux-thunk";
import {followAPI, usersAPI} from "../api/api";
import {AppStateType} from "./store";
import {Dispatch} from "redux";

export type UserActionType =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetPageAT
    | setTotalUsersCountAT
    | toggleIsFetchingAT
    | followingInProgressAT
export type UserType = {
    id: number
    followed: boolean
    name: string
    status?: string
    location: { city: string, country: string }
    photos: { small?: string, large?: string }
    followProgress: Array<FollowingProgressType>

}


export type FollowingProgressType = {
    id: number
    progress: boolean
}

export type InitialStateType = typeof initialState


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    followed: false as boolean,
    followProgress: [] as Array<FollowingProgressType>
}

export const userReducer = (state: InitialStateType = initialState, action: UserActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":

            return {
                ...state,
                users: [...state.users].map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: [...state.users].map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, users: [...action.payload.users]}
        case "SET-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case 'FOLLOWING-IN-PROGRESS':
            return {
                ...state
                , followProgress: action.payload.progress ?
                    [...state.followProgress, {id: action.payload.id, progress: true}]
                    : state.followProgress.filter(u => u.id !== action.payload.id)
            }

    }
    return state

}
export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetPageAT = ReturnType<typeof setPage>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type followingInProgressAT = ReturnType<typeof followingInProgress>

export const follow = (userId: number) => {
    return {type: "FOLLOW", payload: {userId}} as const
}
export const unfollow = (userId: number) => {
    return {type: "UNFOLLOW", payload: {userId}} as const
}

export const setUsers = (users: Array<UserType>) => {
    return {type: "SET-USERS", payload: {users}} as const
}

export const setPage = (currentPage: number) => {
    return {type: "SET-PAGE", payload: {currentPage}} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: "SET-TOTAL-USERS-COUNT", payload: {totalUsersCount}} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", payload: {isFetching}} as const
}
export const followingInProgress = (progress: boolean, id: number) => {
    return {type: 'FOLLOWING-IN-PROGRESS', payload: {progress, id}} as const
}


export const getUser = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<UserActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setPage(page))
        const res = await usersAPI.getUsers(page, pageSize)
        debugger
        try {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
        } catch (err) {

        }
    }
}
export const followUser = (id: number) => {
    return async (dispatch: Dispatch<UserActionType>) => {
        dispatch(followingInProgress(true, id))
        const res = await followAPI.follow(id)
        try {
            if (res.data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(followingInProgress(false, id))
            }
        } catch (err) {
        }
    }
}

export const unfollowUser = (id: number) => {
    return async (dispatch: Dispatch<UserActionType>) => {
        dispatch(followingInProgress(true, id))
        const res = await followAPI.unfollow(id)
        try {
            if (res.data.resultCode === 0) {
                dispatch(unfollow(id))
                dispatch(followingInProgress(false, id))
            }
        } catch (err) {
        }

    }
}













