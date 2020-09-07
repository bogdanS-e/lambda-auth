import {REQUEST_TOKEN,RECEIVE_USER_DATA,REFRESH_TOKEN_WAS_NOT_VALID} from '../actions/tokenManagement';
import { LOG_OUT } from '../actions/signFormControllerActions';
function user(state = {
    isFetching: false,
    data: {
        role: 'guest'
    }
}, action) {
    switch (action.type) {
        case REQUEST_TOKEN:
            return {...state,...{isFetching:true}};
        case REFRESH_TOKEN_WAS_NOT_VALID:
            return {...state,...{isFetching:false}};
        case RECEIVE_USER_DATA:
            return {
                ...state,
                ...{
                    isFetching:false,
                    data: {
                        ...state.data,
                        ...{role:'user'},
                        ...action.userData
                    } 
                }
            }
        case LOG_OUT:
            return {
                ...state,
                ...{
                    data: {role:'guest'}
                }
            }
        default:
            return state;
    }
}
export default user;