import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./AppContext.js";
import AppRouter from "./AppRouter.js";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
