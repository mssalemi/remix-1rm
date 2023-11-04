import React from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

interface WorkoutProgram {
  title: string;
}

interface Props {
  title: string;
  workoutProgram?: WorkoutProgram;
}

export function WorkoutProgramDisplay({ title }: Props) {
  return (
    <div>
      {title ? (
        <>
          <WeeklyWorkoutDisplay />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
