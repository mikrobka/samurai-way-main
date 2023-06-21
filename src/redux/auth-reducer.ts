import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm/LoginForm";
import {stopSubmit} from "redux-form";


export type AuthActionType = toggleIsFetchingAT | SetUserDataAT

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialStateType = typeof initialState

const initialState = {
    id: null,
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
    return {type: "SET-USER-DATA", payload: {userData, isAuth}} as const
}


export const authMyProfile = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
      return authAPI.getAuthUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data, true))
            }
        });
    }
}


export const loginData = (data: FormDataType) => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.login(data).then(response => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(authMyProfile())
            } else {
                dispatch(<toggleIsFetchingAT | SetUserDataAT>stopSubmit('login', {_error: response.data.messages[0]}))
            }
        });
    }
}

export const logoutData = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData({id: null, email: null, login: null}, false))
            }
        });
    }
}

