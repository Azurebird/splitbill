import { GROUPS_LOADED, GROUP_HISTORY_LOADED, GROUPS_CREATE } from '../types';

/** @deprecated */
export default function categories(state = { list: [] }, action = {}) {
  switch (action.type) {
    case GROUPS_LOADED:
      return action.groups;
    case GROUP_HISTORY_LOADED:
      return {
        ...state,
        history: action.history || []
      };
    case GROUPS_CREATE:
      return {
        ...state,
        list: [...state.list, action.group]
      };
    default:
      return state;
  }
}
