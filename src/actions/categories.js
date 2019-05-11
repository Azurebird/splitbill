import api from '../api';
import { CATEGORIES_LOADED } from '../types';

export const categoriesLoaded = categories => ({
  type: CATEGORIES_LOADED,
  categories
});

export const load = credentials => async dispatch => {
  const categories = await api.categories.load(credentials);
  return dispatch(categoriesLoaded(categories));
};
