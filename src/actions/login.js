import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => async dispatch => {
  const user = await api.user.login(credentials);
  localStorage.loggedUser = user.token;
  return dispatch(userLoggedIn(user));
};

export const logout = () => dispatch => {
  localStorage.removeItem('loggedUser');
  return dispatch(userLoggedOut());
};
