import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogReduxForm, MessageFormType} from "./DialogForm/DialogForm";




export const Dialogs = (props: DialogsPropsType) => {


    const addNewMessage = (message:MessageFormType) => {
        props.addMessage(message.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map((d) => (<DialogItem id={d.id} name={d.name}/>))}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map((m) => (<Message key={m.id} message={m.message}/>))}
            </div>

            <DialogReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}