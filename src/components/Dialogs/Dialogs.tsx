import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {} from "../../SelfMadeRedux/state";
import { addMessageAC, DialogActionType, updateNewMassageTextAC} from "../../SelfMadeRedux/dialogReduсer";


type DialogPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText:string
    dispatch:(action:DialogActionType)=>void

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
    let dialogsElements = props.dialogsData.map((d) => (<DialogItem id={d.id} name={d.name}/>));
    let messagesElements = props.messagesData.map((m) => (<Message key={m.id} message={m.message}/>));

    const addMessage = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewMassageTextAC(newText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messages}>
                <textarea placeholder={"enter your message"} value={props.newMessageText} onChange={onChangeHandler}></textarea>
            </div>
            <div className={s.messages}>
                <button onClick={addMessage}>Send message</button>
            </div>

        </div>
    )
}