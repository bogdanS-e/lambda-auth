import { TOGGLE_THEME, DARK, LIGHT } from '../actions/themeActions';
function theme(state = localStorage.getItem('theme') || LIGHT, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            const newTheme = state === DARK ? LIGHT : DARK;
            localStorage.setItem('theme', newTheme);
            return newTheme;
        default:
            return state;
    }
}
export default theme;