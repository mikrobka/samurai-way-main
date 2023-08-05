import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}


type MapStateToProps = {
    profile: ProfileType
    status: string
    id: any
}

type MapDispatchToProps = {
    getProfile: (id: string) => void
    getStatus: (id: string) => void
    updateStatus: (status: string) => void
}
export type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType


export class ProfileClassComponent extends React.Component<PropsType> {
    componentDidMount() {
        let id = this.props.match.params.userId
        if (!id) {
            id = this.props.id
            if (!id) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(id)
        this.props.getStatus(id)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }

}


const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.profilePage.profile.userId
    }
}

export default compose<React.ComponentType>(connect(MapStateToProps, {
    getProfile,
    updateStatus,
    getStatus
}), withRouter, withAuthRedirect,)(ProfileClassComponent)