import React from "react";

// import {
//   Typography,
//   Col,
//   Row,
//   Skeleton,
//   InputNumber,
//   Button,
//   Space,
// } from "antd";

import { DailyWorkoutDisplay } from "./WorkoutDisplay";

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
          <DailyWorkoutDisplay />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
