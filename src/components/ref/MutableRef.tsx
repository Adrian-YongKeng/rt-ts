import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const intervalRef = useRef<number | null>(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const stopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    } else {
      intervalRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const clearTimer = () => {
    setTimer(0);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>
        {isRunning ? "Stop Timer" : "Resume Timer"}
      </button>
      <button onClick={clearTimer}>Clear Timer</button>
    </div>
  );
};

export default MutableRef;
