import { connect } from 'react-redux'
import Footer from '../components/Footer.jsx';
function mapStateToProps(state) {
    const { language } = state
    return {
        language
    }
}
export default connect(mapStateToProps)(Footer);