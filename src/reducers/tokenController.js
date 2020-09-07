import { ACCESS_TOKEN_WAS_NOT_VALID, REFRESH_TOKEN_WAS_NOT_VALID, REFRESHING_TOKENS } from '../actions/tokenManagement';
import { LOG_OUT } from '../actions/signFormControllerActions';
function token(state = {
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
}, action) {
    switch (action.type) {
        case ACCESS_TOKEN_WAS_NOT_VALID:
            return { ...state, ...{ accessToken: null } }
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
        case REFRESH_TOKEN_WAS_NOT_VALID:
        case LOG_OUT:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return {
                accessToken:null,
                refreshToken:null
            }
        default:
            return state;
    }
}
export default token;
