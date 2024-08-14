import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "./styles/global.scss";

const themeColor = document.querySelector('meta[name="theme-color"]');

const updateThemeColor = (isDark) => {
  themeColor.setAttribute("content", isDark ? "#222017" : "#f4eddf");

  if (isDark) document.body.className = "dark";
  else document.body.className = "light";
};

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
updateThemeColor(darkModeMediaQuery.matches);
darkModeMediaQuery.addEventListener("change", (e) => {
  updateThemeColor(e.matches);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
