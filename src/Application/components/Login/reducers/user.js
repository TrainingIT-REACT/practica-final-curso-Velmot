
import { USER_LOG_IN, USER_LOG_OUT } from "../actions";

const initialState = {
  login: {
    user: {
      loggedIn: false,
      user: ""
    }
  }
};

const user = (state = initialState.login.user, { type, user }) => {
  switch (type) {
    case USER_LOG_IN:
      return {
        ...state,
        loggedIn: true,
        user
      };
    case USER_LOG_OUT:
      return {
        ...initialState.login
      };
    default:
      return state;
  }
};

export const getUser = state => state.login.user;

export default user;
