import { createContext } from 'react';

const UserContext = createContext({
  loggedIn: false,
  updateUser: () => {}
});

export default UserContext;