import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Login, { UserBox } from "../Login";
import ContentWrapper from "../ContentWrapper";
import Player from "../Player";
import Menu from "../Menu";
import SearchBox from "../Search";
import ErrorBoundary from "../ErrorBoundary";
import { getUser } from "../Login/reducers/user";

import "./css/MainLayout.css";

const MainLayout = ({ user: { loggedIn } }) => (
  <Router>
    <div className="reactify">
      <div className="container">
        <ErrorBoundary>
          {loggedIn ? (
            <>
              <div className="side-menu">
                <Menu />
              </div>
              <div className="content">
                <div className="header">
                  <SearchBox />
                  <UserBox />
                </div>
                <ContentWrapper />
              </div>
              <div className="player">
                <Player />
              </div>
            </>
          ) : (
            <Login />
          )}
        </ErrorBoundary>
      </div>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  user: getUser(state)
});

export default connect(mapStateToProps)(MainLayout);
