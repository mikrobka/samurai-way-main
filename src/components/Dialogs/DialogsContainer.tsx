import React from "react";
import {
    addMessage,
    InitialStateType,
} from "../../redux/dialogReduсer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";




type mapStatePropsType = { // типизируем данные в контейнере
    dialogsPage:InitialStateType
}

type MapDispatchPropsType = { // типизируем функции в контейнере
    addMessage:(message:string)=>void
}

export type DialogsPropsType = mapStatePropsType & MapDispatchPropsType // делаем общий тип

 const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage, // получаем данные из сейта
    }
 }

 export default compose<React.ComponentType>(connect(mapStateToProps,{addMessage}),withAuthRedirect)(Dialogs)
