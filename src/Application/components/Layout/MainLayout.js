import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Login, { UserBox } from "Components/Login";
import ContentWrapper from "Components/ContentWrapper";
import Player from "Components/Player";
import Menu from "Components/Menu";
import SearchBox from "Components/Search";
import ErrorBoundary from "Components/ErrorBoundary";
import { getUser } from "Components/Login/reducers/user";

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
