import React, { useState, useEffect } from "react";
import cn from "classnames";
import Icon from "../Application/components/Icon";
import Timer from "./Timer";

import "./css/Player.css";

const TYPE = {
  PLAY: "play",
  PAUSE: "pause",
  CONTROL: "control"
};

const buttons = [
  {
    icon: "step-backward",
    action: nextSong => nextSong(-1),
    type: TYPE.CONTROL,
    style: "secondary"
  },
  {
    icon: "play",
    action: (setPlaying, canPlay) => canPlay && setPlaying(true),
    type: TYPE.PLAY,
    style: "primary"
  },
  {
    icon: "pause",
    action: (setPlaying, canPlay) => canPlay && setPlaying(false),
    pause: true,
    type: TYPE.PAUSE,
    style: "primary"
  },
  {
    icon: "step-forward",
    action: nextSong => nextSong(1),
    type: TYPE.CONTROL,
    style: "secondary"
  }
];

const Player = ({ song, nextSong }) => {
  const [audio, setAudio] = useState();
  const [playing, setPlaying] = useState(false);
  useEffect(() => song && setAudio(new Audio(song.audio)), [song]);
  useEffect(() => {
    if (song) return playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    audio && audio.addEventListener("ended", () => nextSong(1));
    return () => {
      audio && audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return (
    <div className="player__container">
      <div className="player__control">
        {buttons
          .filter(
            b =>
              (playing && b.type === TYPE.PAUSE) ||
              (!playing && b.type === TYPE.PLAY) ||
              b.type === TYPE.CONTROL
          )
          .map((b, i) => (
            <span
              key={i}
              className={cn("player__control-button", b.style, {
                disabled: !song
              })}
              onClick={() =>
                b.action(b.type === TYPE.CONTROL ? nextSong : setPlaying, song)
              }
              disabled={song}
            >
              <Icon name={b.icon} />
            </span>
          ))}
      </div>
      <div className="player__song">
        {song && (
          <div className="player__song-title">
            {song.name || "Esto es una canción"}
            {song.album ||
              (" - Y esto el album" && (
                <span className="player__song-album">{` - ${song.album}`}</span>
              ))}
          </div>
        )}
      </div>
      <Timer time={audio && audio.currentTime} duration={song && song.seconds} />
    </div>
  );
};

export default Player;
