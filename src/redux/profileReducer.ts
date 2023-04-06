import {text} from "stream/consumers";

export type ProfileActionType = AddPostAT | UpdateNewPostTextAT
export type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}

export type InitialStateType = typeof initialState


const initialState = {
    postsData: [
        {id: 1, postMessage: "Yo", likesCount: 10},
        {id: 2, postMessage: "Hi how are you", likesCount: 10},
        {id: 3, postMessage: "This is my firs post", likesCount: 10},
        {id: 4, postMessage: "Yo", likesCount: 10},
    ] as Array<PostsType>,
        newPostsText: ""
}

export const profileReducer = (state:InitialStateType = initialState, action: ProfileActionType):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                postMessage: state.newPostsText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData,newPost],
                newPostsText: ""
            }

        case "UPDATE-NEW-POST-TEXT":
           return {...state,newPostsText: action.payload.text}

    }
    return state

}
export type AddPostAT = ReturnType<typeof addPostAC>

export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (newPostText: string) => {
    return {type: "ADD-POST",payload:{newPostText}} as const
}

export const updateNewPostTextAC = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT",payload:{text}}
}


