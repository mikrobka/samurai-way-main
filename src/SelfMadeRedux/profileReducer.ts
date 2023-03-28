import { PostsType, ProfilePageType} from "./state";


export type ProfileActionType = AddPostAT | UpdateNewPostTextAT

export const profileReducer = (state: ProfilePageType, action: ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                postMessage: state.newPostsText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostsText = ""
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostsText = action.newText
            break;
    }
    return state

}
export type AddPostAT = {
    type: "ADD-POST"
    newPostText: string
}

export type UpdateNewPostTextAT = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export const addPostAC = (newPostText: string): AddPostAT => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}

export const updateNewPostTextAC = (text: string): UpdateNewPostTextAT => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }
}


