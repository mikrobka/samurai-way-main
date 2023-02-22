import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string,
    id: number
}

type MessagePropsType = {
    message: string
}
const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Vasya"},
        {id: 3, name: "Ira"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Vika"},
        {id: 6, name: "Anna"},
        {id: 7, name: "Olya"},

    ]


    let messagesData = [
        {id: 1, message: "Yo"},
        {id: 1, message: "Sap"},
        {id: 1, message: "Hi"},
        {id: 1, message: "Hello"},
        {id: 1, message: "Yo"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>


            </div>
        </div>
    )
}