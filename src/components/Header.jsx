import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import Switcher from './Switcher';
import '../style/header.css';
import { DARK } from '../actions/themeActions';
import { ENGLISH } from '../actions/languageActions';
const Header = (props) => {
    const { toggleTheme, theme, language, toggleLanguage, userRole,logOut } = props;
    const changeLangElement = useRef(null);
    const changeThemeElement = useRef(null);
    function toggleCheckedLang() {
        changeLangElement.current.checked = !changeLangElement.current.checked;
    }
    function toggleCheckedTheme() {
        changeThemeElement.current.checked = !changeThemeElement.current.checked;
    }
    useEffect(() => {
        if (theme === DARK)
            changeThemeElement.current.checked = true
        if (language === ENGLISH)
            changeLangElement.current.checked = true;
    }, []);
    return (
        <div className='container-fluid header-wrapper'>
            <header className='container header'>
                <div className='language-switcher header-switcher d-flex align-items-center' onClick={() => { toggleCheckedLang(); toggleLanguage() }}>
                    <label htmlFor='languageSwitcher' className="mb-0 mr-1 header-switcher-label">{language === ENGLISH ? 'Ua' : 'Укр'}</label>
                    <Switcher refElement={changeLangElement} />
                    <label htmlFor='languageSwitcher' className="mb-0 ml-1 header-switcher-label">{language === ENGLISH ? 'En' : 'Англ'}</label>
                </div>
                <div className='theme-switcher  header-switcher d-flex align-items-center' onClick={() => { toggleCheckedTheme(); toggleTheme() }}>
                    <label htmlFor='themeSwitcher' className="mb-0 mr-1 header-switcher-label">{language === ENGLISH ? 'Light' : 'Світла'}</label>
                    <Switcher refElement={changeThemeElement} />
                    <label htmlFor='themeSwitcher' className="mb-0 ml-1 header-switcher-label">{language === ENGLISH ? 'Dark' : 'Темна'}</label>
                </div>
                {userRole === 'user' ?
                    <div className='log-out-button-wrapper'>
                        <button onClick={logOut} className='btn log-out-button'>{language === ENGLISH ? 'Log out' : 'Вихід'}</button>
                    </div>
                    : null}
            </header>
        </div>
    )
}
Header.propTypes = {
    language: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
    logOut: PropTypes.func.isRequired,
}
export default Header;