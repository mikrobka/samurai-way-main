import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateType} from "../../redux/self-made-store";
import { addMessageAC, DialogActionType, updateNewMassageTextAC} from "../../redux/dialogReduсer";


type DialogPropsType = {

    addMessage:()=>void
    onChangeMessage:(newText:string)=>void
    state:RootStateType

}

type DialogType = {
    id: number
    name: string

}

type MessageType = {
    id: number
    message: string
}

export const Dialogs = (props: DialogPropsType) => {
    const addMessage = () => {
        props.addMessage()
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsPage.dialogsData.map((d) => (<DialogItem id={d.id} name={d.name}/>))}
            </div>
            <div className={s.messages}>
                {props.state.dialogsPage.messagesData.map((m) => (<Message key={m.id} message={m.message}/>))}
            </div>
            <div className={s.messages}>
                <textarea placeholder={"enter your message"} value={props.state.dialogsPage.newMessageText} onChange={onChangeHandler}></textarea>
            </div>
            <div className={s.messages}>
                <button onClick={addMessage}>Send message</button>
            </div>

        </div>
    )
}