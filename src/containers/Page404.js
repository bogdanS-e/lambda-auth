import { connect } from 'react-redux'
import Page404 from '../components/Page404.jsx';
function mapStateToProps(state) {
    const { language } = state
    return {
        language
    }
}
export default connect(mapStateToProps)(Page404);