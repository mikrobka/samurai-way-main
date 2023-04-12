import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReduсer";
import {userReducer} from "./usersReducer";


let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage:userReducer
})


export type AppStateType = ReturnType<typeof RootReducer>


export let store = createStore(RootReducer)