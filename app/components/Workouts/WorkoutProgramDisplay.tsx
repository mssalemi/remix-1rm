import React from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import { weeklyWendlerWorkout } from "../../utils/data/shit_wendler_api";

interface WorkoutProgram {
  title: string;
}

interface Props {
  title: string;
  workoutProgram?: WorkoutProgram;
}

export function WorkoutProgramDisplay({ title }: Props) {
  const weeklyWorkouts = weeklyWendlerWorkout({
    squat: 100,
    bench: 100,
    deadlift: 100,
  });

  return (
    <div>
      {title ? (
        <>
          <WeeklyWorkoutDisplay days={weeklyWorkouts.days} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
