import { connect } from 'react-redux'
import { toggleTheme } from '../actions/themeActions';
import {toggleLanguage} from '../actions/languageActions';
import Header from '../components/Header.jsx';

function mapStateToProps(state) {
    const { theme, language } = state
    return {
        theme,
        language
    }
}
function mapDispatchToProps(dispatch){ 
    return{
        toggleTheme: ()=>dispatch(toggleTheme()),
        toggleLanguage: ()=>dispatch(toggleLanguage())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);