import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type ProfileActionType = AddPostAT | UpdateNewPostTextAT | SetUserProfileAT | SetStatusAT

export type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: { small: string, large: string }

}

export type InitialStateType = typeof initialState


export const initialState = {
    postsData: [
        {id: 1, postMessage: "Yo", likesCount: 10},
        {id: 2, postMessage: "Hi how are you", likesCount: 10},
        {id: 3, postMessage: "This is my firs post", likesCount: 10},
        {id: 4, postMessage: "Yo", likesCount: 10},
    ] as Array<PostsType>,
    newPostsText: "" as string,
    profile: {} as ProfileType,
    status: "" as string
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                postMessage: state.newPostsText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostsText: ""
            }

        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostsText: action.payload.text}

        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        case 'SET-STATUS':
            return {...state, status: action.payload.status}


    }
    return state

}
export type AddPostAT = ReturnType<typeof addPost>

export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostText>

export type SetUserProfileAT = ReturnType<typeof setUserProfile>

export type SetStatusAT = ReturnType<typeof setStatus>

export const addPost = (newPostText: string) => {
    return {type: "ADD-POST", payload: {newPostText}} as const
}

export const updateNewPostText = (text: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", payload: {text}} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: "SET-USER-PROFILE", payload: {profile}} as const
}

export const setStatus = (status: string) => {
    return {type: "SET-STATUS", payload: {status}} as const
}

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        let id = userId
        if (!id) {
            id = "15239"
        }
        profileAPI.getProfile(id).then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        let id = userId
        if (!id) {
            id = "15239"
        }
        profileAPI.getStatus(id).then(res => {
            dispatch(setStatus(res.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(res.data))
            }
        })
    }
}



