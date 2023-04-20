import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";






export function MyPosts(props:PostsPropsType ) {

    const postsElements = props.postsPage.postsData.map(p => <Post message={p.postMessage} like={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current){
         props.addPost(props.postsPage.newPostsText)
        }
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)


    }




    return (
        <div className={s.postsBlock}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea placeholder={"New post"}  ref={newPostElement} value={props.postsPage.newPostsText} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button disabled={props.postsPage.newPostsText === ""} onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}