import React, { useContext } from "react";
import UserContext from "./UserContext";

import "./css/UserBox.css";
import Icon from "../Icon";

const UserBox = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="user-box">
      {userContext.loggedIn ? (
        "Not logged"
      ) : (
        <>
          <div className="user-box__user">
            {"Pepe"}
            <div className="user-box__logout">
              <Icon name="sign-out-alt" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserBox;
