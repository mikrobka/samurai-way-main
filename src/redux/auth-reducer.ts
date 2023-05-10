import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm/LoginForm";

export type AuthActionType = toggleIsFetchingAT | SetUserDataAT

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
}

export type InitialStateType = typeof initialState

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case 'SET-USER-DATA':
            return <InitialStateType>{...state, ...action.payload.userData, isAuth: action.payload.isAuth}

    }
    return state

}

export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type SetUserDataAT = ReturnType<typeof setUserData>



export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", payload: {isFetching}} as const
}
export const setUserData = (userData: AuthType, isAuth: boolean) => {
    return {type: "SET-USER-DATA", payload: {userData,isAuth}} as const
}



export const authMyProfile = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.getAuthUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data, true))
            }
        });
    }
}



export const loginData = (data:FormDataType) => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.login(data).then(response => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(authMyProfile())
            }
        });
    }
}

export const logoutData = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData({userId:null,email:null,login:null},false))
            }
        });
    }
}

