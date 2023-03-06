import React from "react";
import s from "./Header.module.css"


export function Header() {
    return(

        <header className={s.header}>
            <img className={s.header_img}
                src="https://e7.pngegg.com/pngimages/437/592/png-clipart-emblem-logo-brand-product-small-mechanical-nuts-emblem-logo.png"
            alt={"Not found"}/>
        </header>
    );
 }