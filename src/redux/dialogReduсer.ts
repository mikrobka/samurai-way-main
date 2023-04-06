
export type DialogActionType = UpdateNewMessageTextAT | AddMessageAT
export type MessageType = {
    id: number
    message: string
}


const initialState = {
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

export const dialogReducer = (state = initialState, action:DialogActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: 6,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ""
            break;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.payload.newText
            break
    }
    return state
}
export const addMessageAC = (newMessageText: string) => {
    return {type: "ADD-MESSAGE",payload:{newMessageText}} as const
}
export const updateNewMassageTextAC = (newText: string) => {
    return {type: "UPDATE-NEW-MESSAGE-TEXT",payload:{newText}} as const
}

type UpdateNewMessageTextAT = ReturnType<typeof updateNewMassageTextAC>
type AddMessageAT = ReturnType<typeof addMessageAC>
