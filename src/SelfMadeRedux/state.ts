type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostsType = {
    id: number
    postMessage: string
    likesCount: number
}

type ProfilePageType = {
    postsData: Array<PostsType>
}
type DialogsPageType = {
    dialogsData:Array<DialogType>
    messagesData:Array<MessageType>
}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}


 let state:RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, postMessage: "Yo", likesCount: 10},
            {id: 2, postMessage: "Hi how are you", likesCount: 10},
            {id: 3, postMessage: "This is my firs post", likesCount: 10},
            {id: 4, postMessage: "Yo", likesCount: 10},
        ],
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
        ]
    }

}

export default state

