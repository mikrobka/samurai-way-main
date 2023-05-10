import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";





type ProfileInfoPropsType = {
    profile:ProfileType
    status:string
    updateStatus:(status:string)=>void
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {

    if(!props.profile){ // если не пришел профайл показываем прелоадер
        return <Preloader/>
    }
    else {
        return (
            <div>
                {/*<div className={""}>*/}
                {/*    <img*/}
                {/*        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt={""}/>*/}
                {/*</div>*/}
                <div className={s.discriptionBlock}>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    ava+discription
                </div>
            </div>
        );
    }

};

