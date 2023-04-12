export type UserActionType = FollowAT | UnfollowAT | SetUsersAT
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
    users: [

    ] as Array<UserType>
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
            return {...state, users: [...state.users, ...action.payload.users]}
    }
    return state

}
export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsers>

export const followAC = (userId: number) => {
    return {type: "FOLLOW", payload: {userId}} as const
}
export const unfollowAC = (userId: number) => {
    return {type: "UNFOLLOW", payload: {userId}} as const
}

export const setUsers = (users: Array<UserType>) => {
    return {type: "SET-USERS", payload: {users}} as const
}




