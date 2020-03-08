export const USER_LOG_IN = "USER_LOG_IN";
export const logIn = user => ({
  type: USER_LOG_IN,
  user
});

export const USER_LOG_OUT = "USER_LOG_OUT";
export const logOut = () => ({
  type: USER_LOG_OUT
});
