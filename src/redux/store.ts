import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogActionType, dialogReducer} from "./dialogReduсer";
import {UserActionType, userReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";


let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage:userReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})


export type AppStateType = ReturnType<typeof RootReducer>

export type AppActionType = AuthActionType | DialogActionType |  ProfileActionType | UserActionType

export let store = legacy_createStore(RootReducer,applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store