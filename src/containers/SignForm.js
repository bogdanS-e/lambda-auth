import { connect } from 'react-redux'
import SignForm from '../components/SignForm/SignForm.jsx';
import {signUp,signIn, isAGuest} from '../actions/signFormControllerActions';
function mapStateToProps(state) {
    const { language, proxy, signForm } = state
    return {
        language,
        proxy,
        isFetching: signForm.isFetching,
        signStatus: signForm.status
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signUp: (path,body)=>dispatch(signUp(path,body)),
        signIn: (path)=>dispatch(signIn(path)),
        backToGuest: ()=>{dispatch(isAGuest())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignForm);