import React from "react";
import { Outlet } from "@remix-run/react";

function Dashboard() {
  const title = "Dashboard Layout";
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <Outlet />
    </div>
  );
}

export default Dashboard;
