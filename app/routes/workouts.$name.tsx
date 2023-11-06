import React, { useEffect } from "react";
import { useParams } from "@remix-run/react";

import { WorkoutDisplay } from "../components/index";

import { wendler531WorkoutProgram } from "app/utils/data/shit_wendler_api";

export default function Workout() {
  const { name } = useParams();

  useEffect(() => {
    console.log("workout name:", name);
  }, [name]);

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
      {program ? <WorkoutDisplay program={program} /> : `${name}" NOT FOUND`}
    </div>
  );
}
