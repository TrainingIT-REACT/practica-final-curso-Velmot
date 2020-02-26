import React from "react";
import Icon from "../../../Application/components/Icon";
import { formatSongDuration } from "../../../Application/components/utils";

const List = ({ data = [] }) => (
  <div className="song-list">
    <ul>
      {data.map((s, i) => (
        <li key={i} className="song-list__item">
          <Icon name="play" />
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
