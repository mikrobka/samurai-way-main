import s from './FormControls.module.css'


export const Textarea = ({input, meta, ...props}: any) => {
    const error = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${error && s.error}`}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {meta.error && meta.touched && <span>Error</span>}
        </div>
    );
};


export const Input = ({input, meta, ...props}: any) => {
    const error = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${error && s.error}`}>
            <div>
                <input {...input} {...props} />
            </div>
            {meta.error && meta.touched && <span>Error</span>}
        </div>
    );
};
