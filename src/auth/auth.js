export const getUserToken = () => {
  return localStorage.loggedUser;
};

export const saveUserToken = token => {
  localStorage.loggedUser = token;
};
