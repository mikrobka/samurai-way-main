
import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message:string
}


export function Post(props:PostPropsType) {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnOYzJFxPyCk11rdkPsVHRaWW62B0_Du8Vw&usqp=CAU"/>
            {props.message}
            <div>
                <span>1like</span>
            </div>

        </div>
    );


}