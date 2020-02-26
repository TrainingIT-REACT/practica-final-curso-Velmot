import React from "react";
import { formatSongDuration } from "../Application/components/utils";

import "./css/Timer.css";

const progressBarWidth = (time, duration, barWidth) => duration && barWidth * (time / duration).toFixed(2);

const Timer = ({ time = 0, duration = 0, barWidth = 500 }) => (
  <div className="timer">
    <div className="timer__time">{duration !== 0 && formatSongDuration(time)}</div>
    <div className="timer__bar" style={{ width: `${barWidth}px` }}>
      <div
        className="timer__progress"
        style={{ width: `${progressBarWidth(time, duration, barWidth)}px` }}
      ></div>
    </div>
    <div className="timer__duration">{duration !== 0 && formatSongDuration(duration)}</div>
  </div>
);

export default Timer;
