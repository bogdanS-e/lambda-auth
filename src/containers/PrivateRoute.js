import { connect } from 'react-redux'
import PrivateRoute from '../components/PrivateRoute.jsx';
function mapStateToProps(state) {
    const { language } = state
    return {
        language
    }
}
export default connect(mapStateToProps)(PrivateRoute);