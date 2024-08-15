import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./AppContext.js";
import AppRouter from "./AppRouter.js";
import Footer from "./frameworks/components/Footer.js";

import { updateThemeColor } from "./utilities/themer.js";

const App = () => {
  useEffect(() => {
    const handleThemeChange = (e) => {
      updateThemeColor(e.matches);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    updateThemeColor(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

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
