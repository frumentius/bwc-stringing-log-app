import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomeApp = lazy(() => import("./features/home/HomeApp.js"));
const DetailsApp = lazy(() => import("./features/details/DetailsApp.js"));

const AppRouter = () => {
  return (
    <div className="min-h-screen pb-17">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<HomeApp />} />
            <Route path="details" element={<DetailsApp />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
