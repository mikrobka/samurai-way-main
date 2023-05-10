import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/LoginForm/LoginForm";

export type AuthActionType = toggleIsFetchingAT | SetUserDataAT | SubmitLoginDataDataAT
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    loginData:FormDataType

}

export type InitialStateType = typeof initialState


const initialState = {
    userId: null,
    email: "null",
    login: "null",
    isFetching: false,
    isAuth: false,
    loginData:{login:"",password:"",rememberMe:false}

}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case 'SET-USER-DATA':
            // @ts-ignore
            return {...state, ...action.payload.userData, isAuth: true}
        case "SUBMIT-LOGIN-DATA":
            return {...state, loginData: {...action.payload.data}}

    }
    return state

}

export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
export type SetUserDataAT = ReturnType<typeof setUserData>
export type SubmitLoginDataDataAT = ReturnType<typeof submitLoginData>


export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", payload: {isFetching}} as const
}
export const setUserData = (userData: AuthType) => {
    return {type: "SET-USER-DATA", payload: {userData}} as const
}
export const submitLoginData = (data: FormDataType) => {
    return {type: "SUBMIT-LOGIN-DATA", payload: {data}} as const
}


export const authMyProfile = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.getAuthUser().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data))
            }
        });
    }
}

export const loginData = (data:FormDataType) => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.submitLoginData(data).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(submitLoginData(response.data.data))
            }
        });
    }
}

