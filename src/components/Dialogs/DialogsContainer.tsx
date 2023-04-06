import React from "react";
import { addMessageAC, updateNewMassageTextAC} from "../../redux/dialogReduсer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";



export const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>
            {(store)=> {
                const state = store.getState()
                const addMessage = () => {
                    store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
                }
                const onChangeHandler = (newText:string) => {
                    store.dispatch(updateNewMassageTextAC(newText))
                }

                return  <Dialogs addMessage={addMessage} onChangeMessage={onChangeHandler} state={state} />
            }
            }
        </StoreContext.Consumer>

    )
}