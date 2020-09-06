import { TOGGLE_LANGUAGE, ENGLISH, UKRAINIAN } from '../actions/languageActions';
function language(state = localStorage.getItem('lang') || UKRAINIAN, action) {
    switch (action.type) {
        case TOGGLE_LANGUAGE:
            const newLang = state === ENGLISH ? UKRAINIAN : ENGLISH;
            localStorage.setItem('lang', newLang);
            return newLang;
        default:
            return state;
    }
}
export default language;