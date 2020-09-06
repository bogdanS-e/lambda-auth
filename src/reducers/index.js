import { combineReducers } from 'redux'
import proxy from './proxyServer'
import user from './userManagement'
import theme from './themeManagement'
import language from './languageManagement';
import signForm from './signFormController';
import token from './tokenController';
export default combineReducers({
    proxy,
    user,
    theme,
    language,
    signForm,
    token
})
