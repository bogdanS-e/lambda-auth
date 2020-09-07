import React from 'react';
import PropTypes from 'prop-types';
import { ENGLISH } from '../actions/languageActions';
import '../style/privateRoute.css';
const PrivateRout = ({language})=>{
    return (
        <div className="private-route">
            <h1>{language === ENGLISH ? 'Token is valid': 'Токен валідний'}</h1>
            <h1>{language === ENGLISH ? 'You are on a private page': 'Ви попали на приватну сторінку'}</h1>
        </div>
    )
}
PrivateRout.propTypes = {
    language: PropTypes.string.isRequired
}
export default PrivateRout;