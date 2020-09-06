import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import SignForm from '../containers/SignForm.js'
import Header from '../containers/Header.js';
import Footer from '../containers/Footer.js';
import Page404 from '../containers/Page404.js';
function App(props) {
  const { proxy, checkAuth, theme, userRole, accessToken } = props;
  useEffect(() => {
    function logIn(path, token, refreshPath, refreshToken) {
      checkAuth(path, token, refreshPath, refreshToken);
    }
    if (accessToken) {
      logIn(proxy + '/me', 'ssdfsdf', proxy + '/refresh', 'sgdsfgsdf');
    }
  }, [checkAuth, proxy, accessToken]);
  useEffect(() => {
    document.querySelector('body').className = theme;
  }, [theme]);
  return (
    <Router>
      <Header />
      <div className='content'>
        
        <Switch>
          <Route exact path='/'>
            <SignForm />
          </Route>
          <PrivateRoute path='/me' userRole={userRole}>
            <div>sdf sdf sdf sdf</div>
          </PrivateRoute>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
App.propTypes = {
  proxy: PropTypes.string.isRequired,
  checkAuth: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired
}
function PrivateRoute({ children, userRole, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userRole === 'user' ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
export default App;
