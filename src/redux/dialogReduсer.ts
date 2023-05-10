export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}


export type DialogActionType =  AddMessageAT
export type InitialStateType = typeof initialState

const initialState = {
    dialogsData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Vasya"},
        {id: 3, name: "Ira"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Vika"},
        {id: 6, name: "Anna"},
        {id: 7, name: "Olya"},

    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: "Yo"},
        {id: 2, message: "Sap"},
        {id: 3, message: "Hi"},
        {id: 4, message: "Hello"},
        {id: 5, message: "Yo"},
    ] as Array<MessageType>,
}


export const dialogReducer = (state: InitialStateType = initialState, action: DialogActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: 6,
                message: action.payload.newMessageText
            }
            return {...state, messagesData: [...state.messagesData, newMessage]}

    }
    return state
}

export const addMessage = (newMessageText: string) => {
    return {type: "ADD-MESSAGE", payload: {newMessageText}} as const
}



type AddMessageAT = ReturnType<typeof addMessage>

