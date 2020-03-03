import React, { useContext } from "react";
import { connect } from "react-redux";
import UserContext from "./UserContext";
import Icon from "../Icon";
import { getUser } from "./reducers/user";
import { logOut } from "../Login/actions";

import "./css/UserBox.css";

const UserBox = ({ user, logOut }) => {
  const userContext = useContext(UserContext);
  const onLogOut = () => {
    logOut();
    userContext.updateUser(false);
  };
  return (
    <div className="user-box">
      {userContext.loggedIn ? (
        "Not logged"
      ) : (
        <>
          <div className="user-box__user">
            <span>{user}</span>
            <div className="user-box__logout" onClick={onLogOut}>
              <Icon name="sign-out-alt" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBox);
