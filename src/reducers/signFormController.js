import { REQUEST_SIGN_FORM, RESEIVE_SIGN_FORM, USER_WAS_CREATED, USER_LOGGED_IN, GUEST, LOG_OUT,WRONG_PASSWORD } from '../actions/signFormControllerActions';
function signForm(state = {
    isFetching: false,
    status: GUEST
}, action) {
    switch (action.type) {
        case REQUEST_SIGN_FORM:
            return { ...state, ...{ isFetching: true } }
        case RESEIVE_SIGN_FORM:
            return { ...state, ...{ isFetching: false } }
        case USER_WAS_CREATED:
            return { ...state, ...{ status: USER_WAS_CREATED } }
        case USER_LOGGED_IN:
            return { ...state, ...{ status: USER_LOGGED_IN } }
        case LOG_OUT:
        case GUEST:
            return { ...state, ...{ status: GUEST } }
        case WRONG_PASSWORD:
            return { ...state, ...{ status: WRONG_PASSWORD} }
        default:
            return state
    }
}
export default signForm;