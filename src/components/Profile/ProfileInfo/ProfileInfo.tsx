import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    console.log(props.profile)
    const withOutAvatar = 'https://static.prinseps.com/media/uploads/cryptopunk6278.png';

    if (!props.profile) { // если не пришел профайл показываем прелоадер
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={s.discriptionBlock}>
                    <picture>
                        <img src={props.profile.photos.large ? props.profile.photos.large : withOutAvatar}
                             alt={props.profile.fullName}/>
                    </picture>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={props.profile.aboutMe} updateStatus={props.updateStatus}/>
                    ava+discription
                </div>
            </div>
        );
    }

};

