import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



type DialogPropsType = {
   dialogsData:Array<DialogType>
    messagesData:Array<MessageType>
}

type DialogType = {
    id:number
    name:string

}

type MessageType ={
    id:number
    message:string
}

export const Dialogs = (props:DialogPropsType) => {
    let dialogsElements = props.dialogsData.map((d) =>(<DialogItem id={d.id} name={d.name}/>));
    let messagesElements = props.messagesData.map((m) => (<Message key={m.id}  message={m.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}