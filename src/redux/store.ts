import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogActionType, dialogReducer} from "./dialogReduсer";
import {UserActionType, userReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddlewhere from 'redux-thunk'


let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage:userReducer,
    auth:authReducer
})


export type AppStateType = ReturnType<typeof RootReducer>

export type AppActionType = AuthActionType | DialogActionType |  ProfileActionType | UserActionType

export let store = legacy_createStore(RootReducer,applyMiddleware(thunkMiddlewhere))

// @ts-ignore
window.store = store