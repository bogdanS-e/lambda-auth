import React, { useRef }  from 'react';
import { useAlert } from 'react-alert';
import PropTypes from 'prop-types';
import {ENGLISH} from '../../actions/languageActions';
import Spiner from '../Spiner';
const SignIn = (props) => {
    const { language, proxy, signIn: propsSignIn, isFetching } = props;
    const email = useRef(null);
    const password = useRef(null);
    const alert = useAlert();
    function signIn(e) {
        e.preventDefault();
        if(checkAllFields()){
            propsSignIn(proxy+`/login?email=${email.current.value}&password=${password.current.value}`);
        }
    }
    function checkAllFields() {
        if(email.current.value.length === 0 || password.current.value.length === 0){
            alert.info(<div><div className='alert-title'>{language === 'eng' ? 'Info' : 'Інфо'}</div><p className='alert-text text-nowrap'>{language === 'eng' ? 'Fill in all fields' : 'Заповніть всі поля'}</p></div>);
            return false;
        }
        return true;
    }
    return (
        <form onSubmit={signIn} className="form sign-in">
            <h2>{language === ENGLISH ? 'Welcome back' : 'З поверненням'}</h2>
            <label>
                <span>{language === ENGLISH ? 'Email' : 'Емейл'}</span>
                <input ref={email} type="text" required />
            </label>
            <label>
                <span>{language === ENGLISH ? 'Password' : 'Пароль'}</span>
                <input ref={password} type="password" required />
            </label>
            <button  disabled={isFetching}  type="submit" className="submit">{isFetching ? <Spiner/> : language === ENGLISH ? 'Sign In' : 'Автентифікація'}</button>
        </form>
    )
}
SignIn.propTypes = {
    language: PropTypes.string.isRequired,
    signIn: PropTypes.func.isRequired,
    proxy: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
export default SignIn;