import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext({});
const AppDispatchContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

  return (
    <AppContext.Provider value={appState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export const useAppState = () => {
  return useContext(AppContext);
}

export const useDispatch = () => {
  return useContext(AppDispatchContext);
}

const appStateReducer = (newAppState) => {
  return { ...newAppState };
}

const initialAppState = { isWelcome: localStorage.getItem("isWelcome") };
