import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getProfile, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}


type MapStateToProps = {
    profile: ProfileType
}

type MapDispatchToProps = {
    getProfile:(id:string)=>void
}
export type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export class ProfileClassComponent extends React.Component<PropsType> {

    componentDidMount() {
      this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouteProfile = withRouter(ProfileClassComponent)

export default connect(MapStateToProps, {getProfile})(WithRouteProfile)