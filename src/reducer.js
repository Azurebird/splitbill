import { combineReducers } from 'redux';
import user from './reducers/user';
import groups from './reducers/groups';

export default combineReducers({
  user,
  groups
});
