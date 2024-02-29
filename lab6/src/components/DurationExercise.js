import StopWatch from "./StopWatch";

export default function DurationExercise({ setMenuScreen }) {

  return (
    <div>
      <StopWatch />
      <button onClick={() => setMenuScreen('')}>Back to Menu</button>
    </div>
  );
}

// stopwatch for duration exercises