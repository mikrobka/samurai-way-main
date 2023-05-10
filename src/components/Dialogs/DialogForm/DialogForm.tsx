import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {maxLength, requiredField} from "../../../utils/validation/validator";

export type MessageFormType = {
    message:string
}

const maxLength100 = maxLength(100)
const DialogForm:React.FC<InjectedFormProps<MessageFormType>> = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={'Enter your message'} name={'message'} component={Textarea} validate={[requiredField,maxLength100]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </>
    );
};


export const DialogReduxForm = reduxForm<MessageFormType>({
    form:'message'
})(DialogForm)
