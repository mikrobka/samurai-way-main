import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../redux/self-made-store";
import {ProfileActionType} from "../../redux/profileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profileState:Array<PostsDataType>
    dispatch:(action:ProfileActionType)=>void
    newPostText:string
}


type PostsDataType = {
    id:number
    postMessage:string
    likesCount:number

}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer newPostText={props.newPostText}  dispatch={props.dispatch} profileState={props.profileState}/>
        </div>

    );
}