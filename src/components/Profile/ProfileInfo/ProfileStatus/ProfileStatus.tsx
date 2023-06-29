import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void;
};

export const ProfileStatus: FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <li className={s.status_wrapper}>
            {editMode ? (
                <input
                    onChange={onStatusChange}
                    autoFocus
                    onBlur={deactivateEditMode}
                    value={status}
                ></input>
            ) : (
                <span placeholder="status" onDoubleClick={activateEditMode}>
          {props.status}
        </span>
            )}
        </li>
    );
};
