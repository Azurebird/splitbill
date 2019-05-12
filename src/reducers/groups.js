import { GROUPS_LOADED, GROUP_HISTORY_LOADED } from '../types';

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
    default:
      return state;
  }
}
