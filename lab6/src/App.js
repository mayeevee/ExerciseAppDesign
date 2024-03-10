import "./App.css";
import { useState } from "react";
import DurationExercise from "./components/DurationExercise.js";
import RepetitionExercise from "./components/RepetitionExercise.js";
import RunningExercise from "./components/RunningExercise.js";

const REPETITION_EXERCISE = "repetition";
const DURATION_EXERCISE = "duration";
const RUNNING_EXERCISE = "running"; // Added running exercise

// exercise list with the types of exercises

const exerciseList = [
  { type: REPETITION_EXERCISE, name: "Push Ups", screen: 1 },
  { type: DURATION_EXERCISE, name: "Bicycling", screen: 2 },
  { type: REPETITION_EXERCISE, name: "Jumping Jacks", screen: 3 },
  { type: RUNNING_EXERCISE, name: "Running", screen: 4 }, // Changed to running exercise
  { type: REPETITION_EXERCISE, name: "Sit Ups", screen: 5 },
  { type: REPETITION_EXERCISE, name: "Pull Ups", screen: 6}
];

// displays main menu with exercise options

function App() {
  const [currentScreen, setCurrentScreen] = useState(null);
  const [currentExerciseName, setCurrentExerciseName] = useState("Go Do Something");

  function exceriseButtonClick(screen, exerciseName) {
    setCurrentScreen(screen);
    setCurrentExerciseName(exerciseName);
  }

  // switches between the screens

  let screenComponent;
  switch (currentScreen) {
    case 1:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <RepetitionExercise exercise={"Push Ups"} setMenuScreen={exceriseButtonClick} />
        </div>
      );
      break;
    case 2:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <DurationExercise exercise={"Bicycling"} setMenuScreen={exceriseButtonClick} />
        </div>
      );
      break;
    case 3:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <RepetitionExercise exercise={"Jumping Jacks"} setMenuScreen={exceriseButtonClick} />
        </div>
      );
      break;
      // Changes to running exercise
    case 4:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <RunningExercise exercise={"Running"} setMenuScreen={exceriseButtonClick} />
        </div>
      );
      break;
    case 5:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <RepetitionExercise exercise={"Sit Ups"} setMenuScreen={exceriseButtonClick} />
        </div>
      );
      break;
      case 6:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <RepetitionExercise exercise={"Pull Ups"} setMenuScreen={exceriseButtonClick} />
        </div>
      );
      break;
    default:
      screenComponent = (
        <div>
          <h1>{currentExerciseName}</h1>
          <p>Select an exercise</p>
          <ul>
            {exerciseList.map((exercise) => (
              <p key={exercise.name}>
                <button onClick={() => exceriseButtonClick(exercise.screen, exercise.name)}>
                  {exercise.name}
                </button>
              </p>
            ))}
          </ul>
        </div>
      );
  }

  return <div className="App">{screenComponent}</div>;
}

export default App;


// I received help from the lab walkthrough as well as my sister's friend who helped me correct many of my syntaxes