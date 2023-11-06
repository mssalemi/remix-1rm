import React, { useEffect } from "react";
import { useParams } from "@remix-run/react";

import { WorkoutDisplay } from "../components/index";

import { wendler531WorkoutProgram } from "app/utils/data/shit_wendler_api";

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

  const program = wendler531WorkoutProgram({
    oneRepMax: {
      squat: 100,
      bench: 100,
      deadlift: 100,
    },
    title: "Wendler 5/3/1",
    totalWeeks: 4,
  });

  return (
    <div>
      {workoutNow ? <WorkoutDisplay program={program} /> : `${name}" NOT FOUND`}
    </div>
  );
}
