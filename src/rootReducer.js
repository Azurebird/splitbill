import { combineReducers } from 'redux';
import user from './reducers/user';
import categories from './reducers/categories';

export default combineReducers({
  user,
  categories
});
