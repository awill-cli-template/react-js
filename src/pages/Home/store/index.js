import { useContext } from "react";
import { PageStateContext, PageDispatchContext } from "hocs/withStore";

const initialState = {};

const syncAction = {
  SET_TASK: (state, action) => {
    return { ...state, task: action.payload };
  },
};

const asyncAction = {
  SET_TASK_ASYNC: async (dispatch) => {
    const task = await setTaskAsync();
    dispatch({
      type: "SET_TASK",
      payload: task,
    });
  },
};

const reudcer = {
  name: "home",
  initialState,
  syncAction,
  asyncAction,
};

export const usePageState = () => useContext(PageStateContext)[reudcer.name + "State"];
export const usePageDispatch = () => useContext(PageDispatchContext)[reudcer.name + "Dispatch"];
export default reudcer;

const setTaskAsync = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("小明");
    }, 1000);
  });
};
