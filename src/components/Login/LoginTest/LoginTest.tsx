import {FC} from "react";
import s from './Login.module.css'
import {useForm} from "react-hook-form";


const Login: FC = () => {

    const requestLoginData = (data: object): void => {
        // dispatch(setLoginDataThunkCreator(data));
    }

    const onSubmit = (data: object) => {
        // requestLoginData(data);
        console.log(data);
    }

    // if (isAuth) return <Navigate to="/profile" />;

    return (
        <section className={s.login_form}>
            <h1 className={s.title}>Login</h1>
            <LoginForm onSubmit={onSubmit}  />
        </section>
    )
}

type LoginFormType = {
    // errorMessage: object,
    onSubmit: (data: object) => void,
    // captchaUrl: string
}

const LoginForm: FC<LoginFormType> = ({ onSubmit}) => {
    const { register, handleSubmit, formState: {errors}, setError } = useForm({mode: 'onBlur'});

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li className={s.field}>
                    <input {...register("email", {required: 'Please enter your Email'})} type="text" placeholder="Email" autoComplete="off" />
                    {errors.email && <span className={s.error}>{errors.email.message}</span>}
                </li>
                <li className={s.field}>
                    <input {...register("password", {required: 'Please enter your password'})} type="password" placeholder="Password" />
                    {errors.password && <span className={s.error}>{errors.password.message}</span>}
                </li>
                <li className={s.field_remember}>
                    <input {...register("rememberMe")} type="checkbox"/>
                    <span>Remember me</span>
                </li>
                {errors.form && <span className={s.error}>{errors.form.message}</span>}
                <li>
                    <button className={s.login_btn}>Login</button>
                </li>
                {/*{captchaUrl && <img src={captchaUrl} alt="Captcha" />}*/}
                {/*{captchaUrl && <input {...register("captcha")} type="text" placeholder="Symbols from picture"/>}*/}
            </ul>
            <div className={s.account_info}>
                <a href="https://social-network.samuraijs.com/signUp" target="_blank">Don't have an account?</a>
                <a href="https://social-network.samuraijs.com/login" target="_blank">Forgot password?</a>
            </div>
        </form>
    )
}

export default Login;