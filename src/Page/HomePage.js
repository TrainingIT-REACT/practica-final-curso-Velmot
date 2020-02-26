import React from "react";
import SongList, { MODE } from "../Song/List";

const HomePage = () => (
  <div className="home">
    <div className="home__recent">
      <div className="home__recent-title">Escuchadas recientemente</div>
      <SongList data={[]} mode={MODE.COVER} />
    </div>
  </div>
);

export default HomePage;
