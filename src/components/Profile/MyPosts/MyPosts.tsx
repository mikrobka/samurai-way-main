import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

// type PostsPropsType = {
//     message:string
// }


export function MyPosts() {

    let postsData = [
        {id: 1, postMessage: "Yo", likesCount:10},
        {id: 2, postMessage: "Hi how are you", likesCount:10},
        {id: 3, postMessage: "This is my firs post", likesCount:10},
        {id: 4, postMessage: "Yo", likesCount:10},

    ]


    return (
        <div className={s.postsBlock}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea>New post</textarea>
                    </div>
                    <div>
                        <button>add post</button>
                    </div>
                </div>
                <div className={s.posts} >
                    <Post message={postsData[0].postMessage} like={postsData[0].likesCount}/>
                    <Post message={postsData[1].postMessage} like={postsData[0].likesCount}/>
                </div>
            </div>
        </div>

    );
}