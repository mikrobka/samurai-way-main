import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";

export type MapStatePropsType = {
    isAuth: boolean
}


const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) { // создаем хок типизируем как компоненета которая примнимает своей тип тип который передается вместе с компонентой

    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props // деструктуризауия пропсов чтоб не отдавать isAuth

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/> // возвращаем компоненту с пришедшими пропсами
    }

    let ConnectedRedirectComponent = connect(MapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent

}