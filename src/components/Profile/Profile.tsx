import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostsText} from "../../SelfMadeRedux/state";

type ProfilePropsType = {
    profileState:Array<PostsDataType>
    addPost:()=>void
    newPostText:string
    updateNewPostsText:(newText:string)=>void
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
            <MyPosts newPostsText={props.newPostText} addPost={props.addPost} profileState={props.profileState} updateNewPostsText={updateNewPostsText}/>
        </div>

    );
}