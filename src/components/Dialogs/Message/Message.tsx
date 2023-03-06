import s from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    key:number
    message:string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div className={s.message} key={props.key}>{props.message}</div>
        </div>
    )
}