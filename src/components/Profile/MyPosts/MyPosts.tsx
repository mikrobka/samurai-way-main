import React, {ChangeEvent, RefObject} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {updateNewPostsText} from "../../../SelfMadeRedux/state";



type PostsPropsType = {
    profileState: Array<PostsType>
    addPost:()=>void
    newPostsText:string
    updateNewPostsText:(newText:string)=>void

}

type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}


export function MyPosts(props: PostsPropsType) {


    const postsElements = props.profileState.map(p => <Post message={p.postMessage} like={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if(newPostElement.current){
            props.addPost()
        }
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
            let newText = e.currentTarget.value
            props.updateNewPostsText(newText)
    }




    return (
        <div className={s.postsBlock}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea placeholder={"New post"}  ref={newPostElement} value={props.newPostsText} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button disabled={true ? props.newPostsText === "" : false} onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}