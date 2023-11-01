import React from "react";
import { Outlet } from "@remix-run/react";

export default function Workouts() {
  const title = "Workout Layout";
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <Outlet />
    </div>
  );
}
