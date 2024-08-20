import { useContext } from "react";
import { AppStateContext, AppDispatchContext } from "../index";
import { useCreateReducer } from "hooks/useCreateReducer";

const initialState = {};

const useUserReducer = () =>
  useCreateReducer({
    name: "user",
    initialState,
    //同步方法
    reducers: {
      SET_USER: (state, action) => {
        return { ...state, user: action.payload };
      },
    },
    //异步方法
    asyncReducers: {
      SET_USER_ASYNC: async (dispatch) => {
        const user = await setUserAsync();
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      },
    },
  });
export default useUserReducer;

export const useUserState = () => useContext(AppStateContext).userState;

export const useUserDispatch = () => useContext(AppDispatchContext).userDispatch;

const setUserAsync = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("小明");
    }, 1000);
  });
};
