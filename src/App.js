import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./AppContext.js";
import AppRouter from "./AppRouter.js";
import Footer from "./frameworks/components/Footer.js";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
