import React from "react";
import SongList from "../Song/List";
import Loader from "../Loader";

import "./css/Album.css";

const Album = ({ album = {}, songs = [], loading }) => {
  return (
    <div className="album">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="album__header">
            <div className="album__cover">
              <img src={album.cover} alt={album.name} />
            </div>
            <div className="album__data">
              <div className="album__title">{album.name}</div>
              <div className="album__artist">{album.artist}</div>
            </div>
          </div>
          <div className="album__songs">
            <SongList data={songs} />
          </div>
        </>
      )}
    </div>
  );
};

export default Album;
