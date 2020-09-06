import { REQUEST_SIGN_FORM, RESEIVE_SIGN_FORM } from '../actions/signFormControllerActions';
function signForm(state = {
    isFetching: false
}, action) {
    switch (action.type) {
        case REQUEST_SIGN_FORM:
            return { ...state, ...{ isFetching: true } }
        case RESEIVE_SIGN_FORM:
            return { ...state, ...{ isFetching: false } }
        default:
            return state
    }
}
export default signForm;