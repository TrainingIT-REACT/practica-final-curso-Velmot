import React from "react";
import { connect } from "react-redux";
import Icon from "Components/Icon";
import { getUser } from "./reducers/user";
import { logOut } from "Components/Login/actions";

import "./css/UserBox.css";

const UserBox = ({ user, logOut }) => {
  const onLogOut = () => {
    logOut();
  };
  return (
    <div className="user-box">
      {!user.loggedIn ? (
        "Not logged"
      ) : (
        <>
          <div className="user-box__user">
            <span>{user.user}</span>
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
