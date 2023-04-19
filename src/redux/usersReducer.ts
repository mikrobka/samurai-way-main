export type UserActionType = FollowAT | UnfollowAT | SetUsersAT|SetPageAT|setTotalUsersCountAT|toggleIsFetchingAT
export type UserType = {
    id: number
    followed: boolean
    name: string
    status?: string
    location: { city: string, country: string }
    photos: {small?:string,large?:string}

}

export type InitialStateType = typeof initialState


const initialState = {
    users: [] as Array<UserType>,
    pageSize:10 as number ,
    totalUsersCount:100 as number,
    currentPage:4 as number,
    isFetching:true as boolean
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
            return {...state,currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state,currentPage: action.payload.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching: action.payload.isFetching}
    }
    return state

}
export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetPageAT = ReturnType<typeof setPage>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>

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




