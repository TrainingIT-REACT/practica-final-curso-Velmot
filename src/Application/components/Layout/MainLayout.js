import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ContentWrapper from "../ContentWrapper";
import Player from "../../../Player";
import Menu from "../Menu";
import SearchBox from '../Search'

import "./css/MainLayout.css";

library.add(fas);

const MainLayout = () => (
  <Router>
    <div className="reactify">
      <div className="container">
        <div className="side-menu">
          <Menu />
        </div>
        <div className="content">
          <SearchBox />
          <ContentWrapper />
        </div>
      </div>
      <div className="player">
        <Player />
      </div>
    </div>
  </Router>
);

export default MainLayout;
