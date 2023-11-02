import React from "react";
import { Outlet } from "@remix-run/react";

export default function Workouts() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
