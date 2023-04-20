import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import { ProfileType, setUserProfile} from "../../redux/profileReducer";


type MapStateToProps = {
        profile:ProfileType
}

type MapDispatchToProps = {
    setUserProfile:(profile:ProfileType)=>void
}

export type ProfilePropsType = MapStateToProps & MapDispatchToProps

export class  ProfileClassComponent extends React.Component<ProfilePropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
            console.log(response.data)
        });
    }

    render(){
        return (

                <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}

const MapStateToProps =(state:AppStateType):MapStateToProps => {
        return {
            profile:state.profilePage.profile
        }
}

export const ProfileContainer = connect(MapStateToProps,{setUserProfile})(ProfileClassComponent)