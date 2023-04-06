import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReduсer";


let RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})


export type AppStateType = ReturnType<typeof RootReducer>


export let store = createStore(RootReducer)