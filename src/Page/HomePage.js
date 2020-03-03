import React from "react";
import { connect } from "react-redux";
import SongList, { MODE } from "../Application/components/Song/List";
import { getRecent } from "../Application/components/Player/reducers/player";

const HomePage = ({ recent }) => (
  <div className="home-page">
    <div className="home__recent">
      <div className="home__recent-title">Escuchadas recientemente</div>
      <SongList data={recent} mode={MODE.COVER} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  recent: getRecent(state)
});

export default connect(mapStateToProps)(HomePage);
