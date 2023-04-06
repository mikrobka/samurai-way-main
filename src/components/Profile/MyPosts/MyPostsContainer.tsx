import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {StoreType} from "../../../redux/self-made-store";
import { addPostAC, ProfileActionType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";

type PostsPropsType = {

    store:StoreType


}
type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}



export function MyPostsContainer(props: PostsPropsType) {

    const state = props.store.getState()


    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostsText))
    }

    const onChangeHandler = (newText:string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }




    return (<MyPosts  updateNewPostText={onChangeHandler} addPost={addPost} state={state} />)
}