import { useContext } from "react";
import { AppStateContext, AppDispatchContext } from "../index";
import { useCreateReducer } from "hooks/useCreateReducer";

const initialState = {};

const useTaskReducer = () =>
  useCreateReducer({
    name: "task",
    initialState,
    reducers: {
      SET_TASK: (state, action) => {
        return { ...state, task: action.payload };
      },
    },
  });

export default useTaskReducer;

export const useTaskState = () => useContext(AppStateContext).taskState;

export const useTaskDispatch = () => useContext(AppDispatchContext).taskDispatch;
