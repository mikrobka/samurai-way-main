import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import {AddPostFormType, ReduxPostForm} from "./PostsForm/PostsForm";


export function MyPosts(props: PostsPropsType) {

    const postsElements = props.postsPage.postsData.map(p => <Post message={p.postMessage} like={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = (postMessage: AddPostFormType) => {
        props.addPost(postMessage.post)

    }

    return (
        < >
            <div className={s.posts_form}>
                <h3>My posts</h3>
                <div>
                    <ReduxPostForm onSubmit={addPost}/>
                </div>
            </div>
            <ul className={s.posts}>
                {postsElements}
            </ul>

        </>

    );
}