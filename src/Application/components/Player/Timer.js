import React, { useState, useEffect } from "react";
import { formatSongDuration } from "../utils";

import "./css/Timer.css";

const progressBarWidth = (time, duration, barWidth) =>
  duration && barWidth * (time / duration).toFixed(2);

const Timer = ({ song, playing, duration = 0, barWidth = 500 }) => {
  const [time, setTime] = useState(0);
  const [interval, setTimeInterval] = useState(0);
  useEffect(() => {
    if (song && playing)
      setTimeInterval(
        setInterval(() => setTime(song.currentTime), 500)
      );
    else clearInterval(interval);
  }, [song, playing]);
  return (
    <div className="timer">
      <div className="timer__time">
        {duration !== 0 && formatSongDuration(time)}
      </div>
      <div className="timer__bar" style={{ width: `${barWidth}px` }}>
        <div
          className="timer__progress"
          style={{
            width: `${progressBarWidth(time, duration, barWidth)}px`
          }}
        ></div>
      </div>
      <div className="timer__duration">
        {duration !== 0 && formatSongDuration(duration)}
      </div>
    </div>
  );
};

export default Timer;
