import React, { useEffect } from "react";
import { useParams } from "@remix-run/react";

import { WorkoutDisplay } from "../components/index";

const WENDLER = {
  id: 1,
  key: "Wendler",
  name: "Wendler 5/3/1",
};

const MEDSTRENGTH = {
  id: 2,
  key: "MedStrength",
  name: "Med Strength Super Workout Program",
};

const WORKOUTS = [WENDLER, MEDSTRENGTH];

export default function Workout() {
  const { name } = useParams();

  useEffect(() => {
    console.log("workout name:", name);
  }, [name]);

  const workoutNow = WORKOUTS.find((workout) => workout.key === name);

  return (
    <div>
      {workoutNow ? (
        <WorkoutDisplay title={workoutNow.name} />
      ) : (
        `${name}" NOT FOUND`
      )}
    </div>
  );
}
