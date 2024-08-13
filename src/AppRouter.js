import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomeApp = lazy(() => import("./features/home/HomeApp.js"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<HomeApp />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
