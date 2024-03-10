import React, { useState, useEffect } from "react";

// creates the stopwatch feature and allows it to display on the screen in minutes, seconds and milliseconds

let currentTimer = 0;
let interval = null;
let isRun = false;

export default function StopWatch() {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);

  useEffect(() => {
    return () => {
      // Clean up the interval when the component is unmounted
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount and unmount

  function run() {
    isRun = !isRun;
    setRunning(isRun);
    console.log("setRunning", running);
    if (!isRun) {
      currentTimer = 0;
      setTimer(0);
      interval && clearInterval(interval);
    } else {
      currentTimer = 0;
      interval = setInterval(() => {
        currentTimer = currentTimer + 10;
        setTimer(currentTimer);
      }, 1);
    }
  }

  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <p style={{ fontSize: "7em", margin: "auto", fontFamily: "monospace" }}>
        {mins}:{secs}.{mills}
      </p>
      <button style={{ fontSize: "4em" }} onClick={() => run()}>
        {running ? "Reset" : "Start"}
      </button>
    </div>
  );
}