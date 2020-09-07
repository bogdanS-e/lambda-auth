import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import SignForm from '../containers/SignForm.js'
import Header from '../containers/Header.js';
import Footer from '../containers/Footer.js';
import Page404 from '../containers/Page404.js';
import SpinnerApp from '../components/SpinerApp';
import PrivatePage from '../containers/PrivateRoute';
import { useHistory } from "react-router-dom";
function App(props) {
  const { proxy, checkAuth, theme, userRole, accessToken, userIsFetching, refreshToken } = props;
  let history = useHistory();

  useEffect(() => {
    function logIn(path, token, refreshPath, refreshToken) {
      checkAuth(path, token, refreshPath, refreshToken);
    }
    if (accessToken) {
      logIn(proxy + '/me', accessToken, proxy + '/refresh', refreshToken);
    }
  }, [checkAuth, proxy, accessToken]);

  useEffect(() => {
    document.querySelector('body').className = theme;
  }, [theme]);

  useEffect(() => {
    /* async function fetchUserData() {
      const resp = await fetch(proxy + '/me', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      });
      const json = await resp.json();
      console.log(json);
    } */
    if (userRole === 'user') {
      history.push('/me');
      //fetchUserData();
    }
  }, [userRole])

  return (
    <>
      {userIsFetching ? <SpinnerApp /> : null}
      <Header />
      <div className='content'>
        <Switch>
          <PrivateRoute exact path='/' userRole={userRole} expectedRole='guest' redirectingPath='/me'>
            <SignForm />
          </PrivateRoute>
          <PrivateRoute path='/me' userRole={userRole} expectedRole='user' redirectingPath='/'>
            <PrivatePage/>
          </PrivateRoute>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  )
}
App.propTypes = {
  proxy: PropTypes.string.isRequired,
  checkAuth: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  userIsFetching: PropTypes.bool.isRequired,
}
function PrivateRoute({ children, userRole, expectedRole, redirectingPath, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userRole === expectedRole ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: redirectingPath,
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
export default App;
