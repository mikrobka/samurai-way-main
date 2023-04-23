import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReduсer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";


let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage:userReducer,
    auth:authReducer
})


export type AppStateType = ReturnType<typeof RootReducer>


export let store = legacy_createStore(RootReducer)

// @ts-ignore
window.store = store