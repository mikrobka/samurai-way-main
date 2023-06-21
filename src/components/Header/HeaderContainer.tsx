import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import { InitialStateType, logoutData} from "../../redux/auth-reducer";


type MapStateToPropsType = { // типизация того что приходит в нашу контейнерную компоненту
    auth: InitialStateType
}

type MapDispatchToPropsType = { // типизация функции что пришли в контейнер
    logoutData: () => void
}


const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth // получаем из стейта нужные нам данные
})

type PropsType = MapDispatchToPropsType & MapStateToPropsType // склеиваем наши пропсы

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }

}


export default connect(MapStateToProps, {logoutData})(HeaderContainer)