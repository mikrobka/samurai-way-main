import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type PostsPropsType = {
    postsData:Array<PostsType>
}

type PostsType = {
    id:number
    postMessage:string
    likesCount:number
}


export function MyPosts(props:PostsPropsType) {



    let postsElements = props.postsData.map(p => <Post message={p.postMessage} like={p.likesCount}/>)



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
                    {postsElements}
                </div>
            </div>
        </div>

    );
}