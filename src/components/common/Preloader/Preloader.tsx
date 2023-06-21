import s from './Preloader.module.css';

import loader from "../../../assets/loader.svg"

export const Preloader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt=''/>
        </div>
    )
}

