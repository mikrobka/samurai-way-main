import React from "react";
import {addPostAC,  updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostsText))
                }

                const onChangeHandler = (newText: string) => {
                    store.dispatch(updateNewPostTextAC(newText))
                }

                return <MyPosts updateNewPostText={onChangeHandler} addPost={addPost} state={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}