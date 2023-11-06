import React from "react";

import { WeeklyWorkoutDisplay } from "./WorkoutDisplay";

import type { WorkoutProgram } from "app/utils/types/types";
interface Props {
  workoutProgram: WorkoutProgram;
}

export function WorkoutProgramDisplay({ workoutProgram }: Props) {
  return (
    <div>
      {
        <>
          {workoutProgram.weeklyWorkouts.map((workoutWeek, index) => {
            return (
              <WeeklyWorkoutDisplay
                key={index}
                days={workoutWeek.days}
                title={workoutWeek.title}
              />
            );
          })}
        </>
      }
    </div>
  );
}
