import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import { ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type PathParamsType = {
    userId:string
}



type MapStateToProps = {
        profile:ProfileType
}

type MapDispatchToProps = {
    setUserProfile:(profile:ProfileType)=>void
}
export type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export class  ProfileClassComponent extends React.Component<PropsType>{

    componentDidMount() {
            let userId = this.props.match.params.userId
        if(!userId){userId = "2"}
       profileAPI.getProfile(userId).then(response => {
            this.props.setUserProfile(response.data)

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

let WithRouteProfile = withRouter(ProfileClassComponent)

export default connect(MapStateToProps,{setUserProfile})(WithRouteProfile)