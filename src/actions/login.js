import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => async dispatch => {
  const user = await api.user.login(credentials);
  return dispatch(userLoggedIn(user));
};
