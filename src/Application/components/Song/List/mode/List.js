import React from "react";
import Icon from "../../../Icon";
import { formatSongDuration } from "../../../utils";

import "../css/List.css";

const List = ({ data = [], playSong }) => (
  <div className="song-list">
    <ul>
      {data.map((s, i) => (
        <li key={i} className="song-list__item">
          <span onClick={() => playSong(s, data)}>
            <Icon name="play" />
          </span>
          <div className="song-list__item-title">{s.name}</div>
          <div className="song-list__item-duration">
            {formatSongDuration(s.seconds)}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default List;
