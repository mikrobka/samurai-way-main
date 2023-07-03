import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type ProfileActionType = AddPostAT | SetUserProfileAT | SetStatusAT | DeletePostAT

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
    profile: {} as ProfileType,
    status: "" as string
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                postMessage: action.payload.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }


        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        case 'SET-STATUS':
            return {...state, status: action.payload.status}
        case "DElETE-POST":
            return {...state, postsData: state.postsData.filter(post => post.id !== action.payload.id)}


    }
    return state

}
export type AddPostAT = ReturnType<typeof addPost>

export type SetUserProfileAT = ReturnType<typeof setUserProfile>

export type SetStatusAT = ReturnType<typeof setStatus>
export type DeletePostAT = ReturnType<typeof deletePost>

export const addPost = (newPostText: string) => {
    return {type: "ADD-POST", payload: {newPostText}} as const
}
export const deletePost = (id: number) => {
    return {type: "DElETE-POST", payload: {id}} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: "SET-USER-PROFILE", payload: {profile}} as const
}

export const setStatus = (status: string) => {
    return {type: "SET-STATUS", payload: {status}} as const
}

export const getProfile = (userId: string) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        const res = await profileAPI.getProfile(userId)
        try {
            if (res.data) {
                dispatch(setUserProfile(res.data))
            }
        } catch (err) {

        }
    }
}

export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        const res = await profileAPI.getStatus(userId)
        try {
            if (res.data) {
                setStatus(res.data)
            }
        } catch (err) {

        }
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        const res = await profileAPI.updateStatus(status)
        try {
            if (res.data.resultCode === 0) {

                dispatch(setStatus(res.data))
            }

        } catch (err) {

        }
    }

}



