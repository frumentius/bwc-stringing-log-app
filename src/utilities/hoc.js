import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAppState } from "../AppContext.js";

export const WelcomedRoute = () => {
  const app_state = useAppState();
  return app_state.isWelcome === "1" ? (
    <Outlet />
  ) : (
    <Navigate to="/welcome" replace />
  );
};
