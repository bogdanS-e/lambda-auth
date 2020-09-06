import { ACCESS_TOKEN_WAS_NOT_VALID, REFRESH_TOKEN_WAS_NOT_VALID, REFRESHING_TOKENS } from '../actions/tokenManagement';
function token(state = {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
}, action) {
    switch (action.type) {
        case ACCESS_TOKEN_WAS_NOT_VALID:
            return { ...state, ...{ accessToken: null } }
        case REFRESH_TOKEN_WAS_NOT_VALID:
            return { ...state, ...{ accessToken: null, refreshToken: null } }
        case REFRESHING_TOKENS:
            localStorage.setItem('accessToken', action.accessToken);
            localStorage.setItem('refreshToken', action.refreshToken);
            return {
                ...state,
                ...{
                    accessToken: action.accessToken,
                    refreshToken: action.refreshToken
                }
            }
        default:
            return state;
    }
}
export default token;
