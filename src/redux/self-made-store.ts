
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
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void // надо пофиксить
}







