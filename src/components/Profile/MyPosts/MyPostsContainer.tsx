import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../redux/self-made-store";
import { addPostAC, ProfileActionType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type PostsPropsType = {
    profileState: Array<PostsType>
    dispatch:(action:ProfileActionType)=>void
    newPostText:string


}
type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}



export function MyPostsContainer(props: PostsPropsType) {


    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onChangeHandler = (newText:string) => {
        props.dispatch(updateNewPostTextAC(newText))
    }




    return (<MyPosts newPostText={props.newPostText} updateNewPostText={onChangeHandler} addPost={addPost} posts={props.profileState} />)
}