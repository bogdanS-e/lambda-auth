import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from './components/react-alert-template-basic'
import './style/custom.css';
const options = {
  position: 'bottom center',
  timeout: 3000,
  offset: '5px',
  containerStyle: {
    zIndex: 10000000000
  },
  transition: 'fade'
}
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware/* ,logger */)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);