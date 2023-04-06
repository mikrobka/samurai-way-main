import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {RootStateType} from "../../../redux/self-made-store";
import { addPostAC, ProfileActionType, updateNewPostTextAC} from "../../../redux/profileReducer";

type PostsPropsType = {
    updateNewPostText:(newText:string)=>void
    addPost:()=>void
    state:RootStateType


}
type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}



export function MyPosts(props: PostsPropsType) {


    const postsElements = props.state.profilePage.postsData.map(p => <Post message={p.postMessage} like={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current){
         props.addPost()
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
                        <textarea placeholder={"New post"}  ref={newPostElement} value={props.state.profilePage.newPostsText} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button disabled={props.state.profilePage.newPostsText === ""} onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}