import { connect } from 'react-redux'
import { toggleTheme } from '../actions/themeActions';
import {toggleLanguage} from '../actions/languageActions';
import Header from '../components/Header.jsx';
import { logOut } from '../actions/signFormControllerActions';

function mapStateToProps(state) {
    const { theme, language,user } = state
    return {
        theme,
        language,
        userRole: user.data.role
    }
}
function mapDispatchToProps(dispatch){ 
    return{
        toggleTheme: ()=>dispatch(toggleTheme()),
        toggleLanguage: ()=>dispatch(toggleLanguage()),
        logOut: ()=>dispatch(logOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);