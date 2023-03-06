import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";



type DialogsPropsType = {
    id:number
    name:string
}

export const DialogItem = (props:DialogsPropsType) => {

    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}