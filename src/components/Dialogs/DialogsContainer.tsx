import React from "react";
import {addMessageAC, InitialStateType, updateNewMassageTextAC} from "../../redux/dialogReduсer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/store";




type mapStatePropsType = {
    dialogsPage:InitialStateType
}

type MapDispatchPropsType = {
    addMessage:(newMessageText:string) => void
    updateNewMassageText:(newText:string)=>void
}

export type DialogsPropsType = mapStatePropsType & MapDispatchPropsType

 const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        dialogsPage:state.dialogsPage
    }
 }
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
        return{
            addMessage:(newMessageText:string)=> {dispatch(addMessageAC(newMessageText))},
            updateNewMassageText:(newText:string)=>{dispatch(updateNewMassageTextAC(newText))}
        }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)