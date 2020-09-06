import React, { useRef } from 'react';
import { useAlert } from 'react-alert';
import PropTypes from 'prop-types';
import { ENGLISH } from '../../actions/languageActions';
import Spiner from '../Spiner';
const SignUp = (props) => {
    const { language, proxy, signUp: propsSignUp, isFetching } = props;
    const email = useRef(null);
    const password = useRef(null);
    const checkPassword = useRef(null);
    const alert = useAlert();
    function signUp(e) {
        e.preventDefault();
        const body = {
            email: email.current.value,
            password: password.current.value
        }
        if (checkAllFields())
            propsSignUp(proxy + '/sign_up',body);
    }
    function checkAllFields() {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordRegex = /^[a-zA-Zа-яА-ЯіїІЇ0-9][a-zA-Zа-яА-Яії0-9]{3,20}$/u;
        if (!emailRegex.test(email.current.value)) {
            alert.info(<div><div className='alert-title'>{language === 'eng' ? 'Info' : 'Інфо'}</div><p className='alert-text text-nowrap'>{language === 'eng' ? 'Invalid email' : 'Неправильний емайл'}</p></div>);
            return false;
        } else if (!passwordRegex.test(password.current.value)) {
            alert.info(<div><div className='alert-title'>{language === 'eng' ? 'Info' : 'Інфо'}</div><p className='alert-text text-nowrap'>{language === 'eng' ? 'Invalid password.' : 'Неправильний пароль.'}</p></div>);
            alert.info(<div><div className='alert-title'>{language === 'eng' ? 'Info' : 'Інфо'}</div><p className='alert-text text-nowrap'>{language === 'eng' ? 'Your password must be 4-20 characters аnd must not contain spaces' : ' Ваш пароль повинен бути довжиною 4-20 символів та не мітсити пробілів'}</p></div>);
            return false;
        } else if (password.current.value !== checkPassword.current.value) {
            alert.info(<div><div className='alert-title'>{language === 'eng' ? 'Info' : 'Інфо'}</div><p className='alert-text text-nowrap'>{language === 'eng' ? 'Password does not match' : 'Пароль не співпадає'}</p></div>);
            return false;
        }
        return true;
    }
    return (
        <form onSubmit={signUp} className="form sign-up">
            <h2>{language === ENGLISH ? 'Time to feel like home' : 'Час почувати себе як удома'}</h2>
            <label>
                <span>{language === ENGLISH ? 'Email' : 'Емейл'}</span>
                <input ref={email} type="email" required />
            </label>
            <label>
                <span>{language === ENGLISH ? 'Password' : 'Пароль'}</span>
                <input ref={password} type="password" required />
            </label>
            <label>
                <span>{language === ENGLISH ? 'Check Password' : 'Підтвердити Пароль'}</span>
                <input ref={checkPassword} type="password" required />
            </label>
            <button disabled={isFetching} type="submit" className="submit">{isFetching ? <Spiner/> : language === ENGLISH ? 'Sign Up' : 'Реєстрація'}</button>
        </form>
    )
}
SignUp.propTypes = {
    language: PropTypes.string.isRequired,
    signUp: PropTypes.func.isRequired,
    proxy: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
export default SignUp;