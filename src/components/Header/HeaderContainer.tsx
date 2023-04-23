import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {AuthType, setUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    auth:AuthType
}

type MapDispatchToPropsType = {
    setUserData:(userData:AuthType)=>void

}


const  MapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    auth:state.auth
})

type PropsType = MapDispatchToPropsType & MapStateToPropsType

 class HeaderContainer extends React.Component<PropsType>  {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        }).then(response => {
                if(response.data.resultCode === 0){
                    console.log(response.data.data.login)
                    this.props.setUserData(response.data.data)
                }
        });
    }

    render(){
        return(
            <Header {...this.props}/>
        );
    }

 }


 export default connect(MapStateToProps,{setUserData})(HeaderContainer)