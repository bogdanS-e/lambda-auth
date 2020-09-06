import React from 'react';
import PropTypes from 'prop-types';
import '../style/footer.css';
import { ENGLISH } from '../actions/languageActions';
const Footer = (props) => {
    const { language } = props;
    return (
        <div className='container-fluid footer-wrapper'>
            <footer className='container footer'>
                <div className='footer-text'>
                    {
                        language === ENGLISH ?
                            'This is just a sample footer. For greater consistency. The web program was written by Bohdan Seredenko as a task for Lambda' :
                            'Цей просто зразок футера. Для більшої консестенції. Веб додаток написав Середенко Богдан, як завдання для компанії Lamda'
                    }
                </div>
            </footer>
        </div>
    )
}
Footer.propTypes = {
    language: PropTypes.string.isRequired
}
export default Footer;