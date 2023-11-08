import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "@remix-run/react";

import { WorkoutDisplay } from "../components/index";

import { wendler531WorkoutProgram } from "app/utils/data/shit_wendler_api";

export default function Workout() {
  const { name } = useParams();

  useEffect(() => {
    console.log("workout name:", name);
  }, [name]);

  const [data, setData] = useState<{
    squat: number;
    bench: number;
    deadlift: number;
  }>({
    squat: 0,
    bench: 0,
    deadlift: 0,
  });

  const program = useMemo(() => {
    return wendler531WorkoutProgram({
      oneRepMax: data,
      title: "Wendler 5/3/1",
      totalWeeks: 4,
    });
  }, [data]);

  return (
    <div>
      {program ? (
        <WorkoutDisplay program={program} setOneRepMax={setData} />
      ) : (
        `${name}" NOT FOUND`
      )}
    </div>
  );
}
