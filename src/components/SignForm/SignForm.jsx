import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { ENGLISH } from '../../actions/languageActions';
import '../../style/signForm.css';
const SignForm = (props) => {
    const SignForm = useRef(null);
    const { language } = props;
    return (
        <div className='SignForm'>
            <div ref={SignForm} className="cont">
                <SignIn {...props}/>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>{language === ENGLISH ? 'New here?' : 'Новенький?'}</h2>
                            <p>{language === ENGLISH ? 'Sign up and discover great amount of new opportunities!' : 'Зареєструйтесь та відкрийте для себе безліч нових можливостей!'}</p>
                        </div>
                        <div className="img__text m--in">
                            <h2>{language === ENGLISH ? 'One of us?' : 'Один із нас?'}</h2>
                            <p>{language === ENGLISH ? "If you already has an account, just sign in. We've missed you!" : 'Якщо ти вже маєш аккаунт, просто автентифікуйся. Ми скучили за тобою?'}</p>
                        </div>
                        <div className="img__btn" onClick={() => { SignForm.current.classList.toggle('s--signup') }}>
                            <span className="m--up">{language === ENGLISH ? 'Sign Up' : 'Реєстрація'}</span>
                            <span className="m--in">{language === ENGLISH ? 'Sign In' : 'Автентифікація'} </span>
                        </div>
                    </div>
                    <SignUp {...props}/>
                </div>
            </div>
        </div>
    )
}
SignForm.propTypes = {
    language: PropTypes.string.isRequired,
    signUp: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    proxy: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
export default SignForm;