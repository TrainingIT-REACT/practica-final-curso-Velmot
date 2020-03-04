import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { isEmpty } from "ramda";
import { getSong } from "./reducers/player";
import { nextSong } from "./actions";
import Icon from "../Icon";
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
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!isEmpty(song)) {
      setAudio(new Audio(song.audio));
      setPlaying(true);
    }
    return () => {
      setPlaying(false);
      setAudio(null);
    };
  }, [song]);
  useEffect(() => {
    if (audio) playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    if (audio) audio.addEventListener("ended", () => nextSong(1));
    return () => {
      if (audio) audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);
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
                disabled: isEmpty(song)
              })}
              onClick={() =>
                b.action(b.type === TYPE.CONTROL ? nextSong : setPlaying, song)
              }
              disabled={isEmpty(song)}
            >
              <Icon name={b.icon} />
            </span>
          ))}
      </div>
      <div className="player__song">
        <div className="player__song-title">
          {song.name || ""}
          {song.album && (
            <span className="player__song-album">{` - ${song.album}`}</span>
          )}
        </div>
      </div>
      <Timer
        song={audio}
        duration={song && song.seconds}
        playing={playing}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  song: getSong(state)
});

const mapDispatchToProps = dispatch => ({
  nextSong: action => dispatch(nextSong(action))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
