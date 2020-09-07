import { connect } from 'react-redux'
import { logInWithToken, refreshTokensAction } from '../actions/tokenManagement';
import App from '../components/App.jsx';


function mapStateToProps(state) {
    const { proxy, theme, language,token,user } = state;
    return {
        proxy,
        theme,
        language,
        userRole:user.data.role,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        userIsFetching: user.isFetching
    }
}
function mapDispatchToProps(dispatch) {
    return {
        checkAuth: (path, token, refreshPath, refreshToken) => dispatch(logInWithToken(path, token, refreshPath, refreshToken)),
        refreshTokens: (path, refreshToken) => dispatch(refreshTokensAction(path, refreshToken))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);