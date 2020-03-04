import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import _ from "lodash";
import { compose, map, pick } from "ramda";
import { NavLink } from "react-router-dom";

import "../css/Cover.css";

const Cover = ({ data = [], columns = 5, className = "" }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const divRef = useRef();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const getCover = async ids =>
      await fetch(`/albums?${ids.map(id => `id=${id}`).join("&")}`)
        .then(res => res.json())
        .then(compose(setAlbums, map(pick(["id", "artist", "cover"]))));
    if (data.length) {
      const ids = data.map(s => s.album_id);
      getCover(Array.from(new Set(ids)));
    }
  }, [data]);
  useEffect(() => {
    divRef.current.offsetWidth && setContainerWidth(divRef.current.offsetWidth);
  }, [containerWidth]);
  const width = Math.floor((containerWidth * 0.7) / columns);
  return (
    <div
      ref={divRef}
      className={cn("song-list-cover", { [className]: className })}
      style={{
        gridTemplateColumns: _.range(columns)
          .map(c => "auto")
          .join(" ")
      }}
    >
      {data.map(s => {
        const album = albums.find(i => i.id === s.album_id) || {};
        return (
          <div
            key={s.id}
            className={cn("song-list-cover__item", {
              [`${className}-cover__item`]: className
            })}
            style={{
              width: `${width}px`,
              height: `${width}px`
            }}
          >
            <div
              className={cn("song-list-cover__item-cover", {
                [`${className}-cover__item-cover`]: className
              })}
            >
              <img
                src={album.cover}
                alt={s.name}
                width={width}
                height={width}
              />
            </div>
            <NavLink
              to={`/album/${s.album_id}`}
              className={cn("song-list-cover__item-title", {
                [`${className}-cover__item-title`]: className
              })}
            >
              {s.name}
            </NavLink>
            <div className="song-list__item-artist"> {album.artist}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cover;
