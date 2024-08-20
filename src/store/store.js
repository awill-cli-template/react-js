import { useContext } from "react";
import { PageStateContext, PageDispatchContext } from "hocs/withStore";

const initialState = {};

const syncAction = {
  SET_USER_INFO: (state, action) => {
    return { ...state, userInfo: action.payload };
  },
  RESET_USER_INFO: () => {
    return { userInfo: null };
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
  name: "app",
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
