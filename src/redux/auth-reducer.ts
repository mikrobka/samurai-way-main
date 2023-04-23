export type AuthActionType = toggleIsFetchingAT | SetUserDataAT
export type AuthType = {
   userId:number|null
    email:string|null
    login:string|null
    isFetching:boolean
    isAuth:boolean

}

export type InitialStateType = typeof initialState


const initialState = {
    userId:null,
    email:"null",
    login:"null",
    isFetching: false,
    isAuth:false

}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching: action.payload.isFetching}
        case 'SET-USER-DATA':
            // @ts-ignore
            return {...state,...action.payload.userData,isAuth: true}
    }
    return state

}

export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type SetUserDataAT = ReturnType<typeof setUserData>


export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", payload: {isFetching}} as const
}
export const setUserData = (userData: AuthType) => {
    return {type: "SET-USER-DATA", payload: {userData}} as const
}

