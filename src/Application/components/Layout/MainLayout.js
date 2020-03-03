import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login, { UserContext, UserBox } from "../Login";
import ContentWrapper from "../ContentWrapper";
import Player from "../Player";
import Menu from "../Menu";
import SearchBox from "../Search";
import ErrorBoundary from "../ErrorBoundary";

import "./css/MainLayout.css";

const MainLayout = () => {
  const userContext = useContext(UserContext);
  return (
    <Router>
      <div className="reactify">
        <div className="container">
          <div className="side-menu">
            <Menu />
          </div>
          <div className="content">
            <div className="header">
              <SearchBox />
              <UserBox />
            </div>
            <ErrorBoundary>
              <ContentWrapper />
              {/* {!userContext.loggedIn && <Login />} */}
            </ErrorBoundary>
          </div>
        </div>
        <div className="player">
          <Player />
        </div>
      </div>
    </Router>
  );
};

export default MainLayout;
