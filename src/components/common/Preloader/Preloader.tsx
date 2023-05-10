import React from 'react';
import s from "../../Users/Users.module.css";
import preloader from "../../../assets/b4d657e7ef262b88eb5f7ac021edda87.gif";



export const Preloader = () => {
    return (
        <div>
             <img className={s.preloader} src={preloader} alt=""/>
        </div>
    );
};

