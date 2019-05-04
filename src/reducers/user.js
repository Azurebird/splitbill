import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

/** @deprecated */
export default function user(
  state = {
    token: localStorage.loggedUser
  },
  action = {}
) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
