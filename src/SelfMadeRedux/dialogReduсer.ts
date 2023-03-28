import {DialogsPageType, MessageType, RootStateType} from "./state";

export type DialogActionType = UpdateNewMessageTextAT | AddMessageAT

export const dialogReducer = (state:DialogsPageType, action:DialogActionType) => {
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
            state.newMessageText = action.newText
            break
    }
    return state
}
export const addMessageAC = (newMessageText: string): AddMessageAT => {
    return {
        type: "ADD-MESSAGE",
        newMessageText: newMessageText
    }
}
export const updateNewMassageTextAC = (newText: string): UpdateNewMessageTextAT => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    }
}

type UpdateNewMessageTextAT = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}
type AddMessageAT = {
    type: "ADD-MESSAGE"
    newMessageText: string
}
