import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../SelfMadeRedux/state";
import { addPostAC, ProfileActionType, updateNewPostTextAC} from "../../../SelfMadeRedux/profileReducer";

type PostsPropsType = {
    profileState: Array<PostsType>
    dispatch:(action:ProfileActionType)=>void
    newPostText:string


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
            props.dispatch(addPostAC(props.newPostText))
        }
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
            let newText = e.currentTarget.value
            props.dispatch(updateNewPostTextAC(newText))
    }




    return (
        <div className={s.postsBlock}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea placeholder={"New post"}  ref={newPostElement} value={props.newPostText} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button disabled={props.newPostText === ""} onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}