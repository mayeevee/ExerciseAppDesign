import React, { useState } from 'react';

const RunningExercise = ({ setMenuScreen }) => {
  const [lapTimes, setLapTimes] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (timeInMilliseconds) => {
    const minutes = Math.floor(timeInMilliseconds / (60 * 1000)).toString().padStart(2, '0');
    const seconds = Math.floor((timeInMilliseconds % (60 * 1000)) / 1000).toString().padStart(2, '0');
    const milliseconds = (timeInMilliseconds % 1000).toString().padStart(3, '0');

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const startStopTimer = () => { // starts and clears timer
  if (isRunning) {
    clearInterval(timerInterval);
  } else {
    const startTime = Date.now() - currentTime;
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now() - startTime);
    }, 100);
    setTimerInterval(intervalId);
    setIsRunning(true);
  }
};

  const recordLap = () => {
    setLapTimes([...lapTimes, formatTime(currentTime)]);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setCurrentTime(0);
    setLapTimes([]); // lap times are put into an array
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Running Exercise</h2>
      <div>
        <p>Time: {formatTime(currentTime)}</p>
        <button onClick={startStopTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={recordLap} disabled={!isRunning}>
          Record Lap
        </button>
        <button onClick={resetTimer} disabled={lapTimes.length === 0 && !isRunning}>
          Reset
        </button>
        <button onClick={() => setMenuScreen(null)}>Return</button>
      </div>
      <div>
        <h3>Lap Times</h3>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>Lap {index + 1}: {lapTime}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningExercise;

// I looked up online for examples of exercise and watched YouTube videos on how to create a timer with laps
