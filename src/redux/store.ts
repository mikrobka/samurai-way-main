import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReduсer";




let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})
export let store = createStore(reducer)