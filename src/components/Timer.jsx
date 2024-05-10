import React, { useEffect, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";
import "./Timer.css";
const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    const minutes = ("0" + (Math.floor(milliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(milliseconds / 1000) % 60)).slice(-2);
    const centiSeconds = ("0" + (Math.floor(milliseconds / 10) % 100)).slice(
      -2
    );

    return `${minutes}:${seconds}:${centiSeconds}`;
  };
  const startTimer = (interval) => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);

  return (
    <div className="timer-container">
      <TimerDisplay time={formatTime()} />
      <TimerControls
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
      />
      <LapList />
    </div>
  );
};

export default Timer;
