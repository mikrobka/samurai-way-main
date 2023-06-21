import {AnyAction, Dispatch} from "redux";
import {authMyProfile} from "./auth-reducer";
import {AppStateType} from "./store";


export type AppActionType = setInitializedAppAT


export type InitialStateType = typeof initialState

const initialState = {
    isInitialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, isInitialized: true};
    }
    return state

}

export type setInitializedAppAT = ReturnType<typeof setInitializedApp>

export const setInitializedApp = () => {
    return {type: "SET-INITIALIZED"} as const
};


export const initializeApp = () => {
    return (dispatch: Dispatch<AppActionType>) => {
        // @ts-ignore
        dispatch(authMyProfile()).then(() => {
            dispatch(setInitializedApp())
        })
    }
}

