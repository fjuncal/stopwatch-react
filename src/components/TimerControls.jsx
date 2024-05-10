import React from "react";

const TimerControls = ({ onStart, onStop }) => {
  return (
    <div className="timer-controls">
      <button onClick={onStart}>Iniciar</button>
      <button onClick={onStop}>Zerar</button>
    </div>
  );
};

export default TimerControls;
