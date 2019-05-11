import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

export default function user(state = { another: 5 }, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
