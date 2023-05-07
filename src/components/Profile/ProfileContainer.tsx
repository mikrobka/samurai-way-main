import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getProfile, ProfileType} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
        profile: state.profilePage.profile,
    }
}

// let WithRouteProfile = withRouter(AuthRedirectComponent)

// export default withAuthRedirect (connect(MapStateToProps, {getProfile})(WithRouteProfile))

export default compose<React.ComponentType>(connect(MapStateToProps, {getProfile}),withRouter,withAuthRedirect,)(ProfileClassComponent)