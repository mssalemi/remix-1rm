import React from "react";
import { useParams } from "@remix-run/react";

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

  const workout = WORKOUTS.find((workout) => workout.key === name);

  const title = workout?.name;

  return <div>{title || `"${name}" NOT FOUND`}</div>;
}
