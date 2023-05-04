import React from "react";
import {
    addMessage,
    InitialStateType,
    updateNewMassageText,
} from "../../redux/dialogReduсer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";




type mapStatePropsType = { // типизируем данные в контейнере
    dialogsPage:InitialStateType
}

type MapDispatchPropsType = { // типизируем функции в контейнере
    addMessage:(newMessageText:string) => void
    updateNewMassageText:(newText:string)=>void
}

export type DialogsPropsType = mapStatePropsType & MapDispatchPropsType // делаем общий тип

 const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage // получаем данные из сейта
    }
 }

export const DialogsContainer = connect(mapStateToProps,{addMessage,updateNewMassageText})(Dialogs)