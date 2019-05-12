import api from '../api';
import { GROUPS_LOADED, GROUP_HISTORY_LOADED } from '../types';

export const groupsLoaded = groups => ({
  type: GROUPS_LOADED,
  groups
});

export const groupHistoryLoaded = history => ({
  type: GROUP_HISTORY_LOADED,
  history
});

export const load = credentials => async dispatch => {
  const groups = {
    list: await api.groups.load(localStorage.loggedUser)
  };
  return dispatch(groupsLoaded(groups));
};

export const getGroupHistory = groupId => async dispatch => {
  const history = await api.groups.history(groupId);
  return dispatch(groupHistoryLoaded(history));
};
