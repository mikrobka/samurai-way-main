import React from "react";
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/store";





type mapStatePropsType = {
    postsPage:InitialStateType
}

type MapDispatchPropsType = {
    addPost:(newPostText:string) => void
    updateNewPostText:(newText:string)=>void
}

export type PostsPropsType = mapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        postsPage:state.profilePage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return{
        addPost:(newPostText:string)=> {dispatch(addPostAC(newPostText))},
        updateNewPostText:(newText:string)=>{dispatch(updateNewPostTextAC(newText))}
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)