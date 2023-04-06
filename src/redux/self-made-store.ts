import {ProfileActionType, profileReducer} from "./profileReducer";
import {DialogActionType, dialogReducer} from "./dialogReduсer";
export type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    postMessage: string
    likesCount: number

}
export type ProfilePageType = {
    postsData: Array<PostsType>
    newPostsText: string

}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type  StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void // надо пофиксить
}


let selfMadeStore: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, postMessage: "Yo", likesCount: 10},
                {id: 2, postMessage: "Hi how are you", likesCount: 10},
                {id: 3, postMessage: "This is my firs post", likesCount: 10},
                {id: 4, postMessage: "Yo", likesCount: 10},
            ],
            newPostsText: ""
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Vasya"},
                {id: 3, name: "Ira"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Vika"},
                {id: 6, name: "Anna"},
                {id: 7, name: "Olya"},

            ],
            messagesData: [
                {id: 1, message: "Yo"},
                {id: 2, message: "Sap"},
                {id: 3, message: "Hi"},
                {id: 4, message: "Hello"},
                {id: 5, message: "Yo"},
            ],
            newMessageText: ""
        }

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("State changing")
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        if (typeof this._callSubscriber === "function") {
            this._callSubscriber()
        }
    }

}

export default selfMadeStore


