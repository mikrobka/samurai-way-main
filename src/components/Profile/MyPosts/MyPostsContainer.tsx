import React from "react";
import {
    addPost,
    InitialStateType,
} from "../../../redux/profileReducer";

import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/store";




type mapStatePropsType = {
    postsPage:InitialStateType
}

type MapDispatchPropsType = {
    addPost:(newPostText:string) => void

}

export type PostsPropsType = mapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        postsPage:state.profilePage
    }
}
export const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)