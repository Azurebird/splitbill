import { combineReducers } from 'redux';
import user from './reducers/user.reducer';
import groups from './reducers/groups.reducer';

export default combineReducers({
  user,
  groups
});
