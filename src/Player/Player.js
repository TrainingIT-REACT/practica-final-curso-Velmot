import React, { useState, useEffect } from "react";
import cn from "classnames";

import "./css/Player.css";
import Icon from "../Application/components/Icon";

const buttons = [
  { icon: "step-backward", action: () => false, style: "secondary" },
  {
    icon: "play",
    action: setPaused => setPaused && setPaused(false),
    style: "primary"
  },
  {
    icon: "pause",
    action: setPaused => setPaused && setPaused(true),
    pause: true,
    style: "primary"
  },
  { icon: "step-forward", action: () => false }
];

const Player = ({ song, songList }) => {
  const [paused, setPaused] = useState(false);
  return (
    <div className="player__container">
      {buttons
        .filter(b => (song && b.pause) || (!song && !b.pause) || true)
        .map((b, i) => (
          <button
            key={i}
            className={cn(b.style, { disabled: !song })}
            onClick={() => b.action(setPaused)}
            disabled={song}
          >
            <Icon name={b.icon} />
          </button>
        ))}
    </div>
  );
};

export default Player;
