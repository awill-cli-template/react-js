import { createContext } from "react";
import useStore from "./reducer";

export const AppStateContext = createContext(null);

export const AppDispatchContext = createContext(null);

const AppProvider = ({ children }) => {
  const { state, dispatch } = useStore();
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppProvider;
