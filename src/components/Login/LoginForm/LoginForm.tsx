import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";
import {maxLength, requiredField} from "../../../utils/validation/validator";


export type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const maxLength20 = maxLength(20)

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={'login'} component={Input} validate={[requiredField,maxLength20]}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={'password'} component={Input} validate={[requiredField,maxLength20]}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>Remember me
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)