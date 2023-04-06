import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType, StoreType} from "../../redux/self-made-store";
import { addMessageAC, DialogActionType, updateNewMassageTextAC} from "../../redux/dialogReduсer";
import {Dialogs} from "./Dialogs";


type DialogPropsType = {
    // dispatch:(action:DialogActionType)=>void

    store:StoreType

}

type DialogType = {
    id: number
    name: string

}

type MessageType = {
    id: number
    message: string
}

export const DialogsContainer = (props: DialogPropsType) => {

    const state = props.store.getState()
    const addMessage = () => {
        props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
    }

    const onChangeHandler = (newText:string) => {
        props.store.dispatch(updateNewMassageTextAC(newText))
    }

    return (
            <Dialogs addMessage={addMessage} onChangeMessage={onChangeHandler} state={state} />
    )
}