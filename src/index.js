import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './rootReducer';
import 'semantic-ui-css/semantic.min.css';
import { userLoggedIn } from './actions/login';
import { load } from './actions/categories';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.loggedUser) {
  const user = { token: localStorage.loggedUser };
  store.dispatch(userLoggedIn(user));
  load()(store.dispatch);
  //store.dispatch(load());
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
