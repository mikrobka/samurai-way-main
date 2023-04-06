import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {updateNewMassageTextAC} from "../../redux/dialogReduсer";




export const Dialogs = (props: DialogsPropsType) => {
    const addMessage = () => {
        props.addMessage(props.dialogsPage.newMessageText)
    }

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMassageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map((d) => (<DialogItem id={d.id} name={d.name}/>))}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messagesData.map((m) => (<Message key={m.id} message={m.message}/>))}
            </div>
            <div className={s.messages}>
                <textarea placeholder={"enter your message"} value={props.dialogsPage.newMessageText} onChange={onChangeHandler}></textarea>
            </div>
            <div className={s.messages}>
                <button onClick={addMessage}>Send message</button>
            </div>

        </div>
    )
}