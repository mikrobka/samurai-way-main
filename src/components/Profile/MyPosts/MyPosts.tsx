import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

// type PostsPropsType = {
//     message:string
// }


export function MyPosts(){
    return(
    <div >
        <div>
            my posts
            <div>
                <textarea>New post</textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message={"Hi how are you"}/>
                <Post message={"This is my firs post"}/>
            </div>
        </div>
    </div>

);
}