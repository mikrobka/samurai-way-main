import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
type ProfilePropsType = {
    postData:Array<PostsDataType>

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
            <MyPosts postsData={props.postData}/>
        </div>

    );
}