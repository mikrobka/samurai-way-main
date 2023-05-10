import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../../utils/validation/validator";
import {Textarea} from "../../../common/FormsControls/FormControls";

export type AddPostFormType = {
    post:string
}


const lengthValidator = maxLength(10)

const PostForm:React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Enter your new post"} name={'post'} component={Textarea} validate={[requiredField,lengthValidator]}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </>
    );
};

export  const ReduxPostForm = reduxForm<AddPostFormType>({
    form:'post'
})(PostForm)