import { useReducer } from "react";

export function useCreateReducer(slice) {
  const { initialState, reducers } = slice;
  const reduce = (state, action) => {
    const sync = reducers[action.type];
    if (sync) {
      return sync(state, action);
    }
    console.error("Unknown action: " + action.type);
    return state;
  };
  const [state, dispatch] = useReducer(reduce, initialState);
  const obj = {
    [slice.name + "State"]: state,
    [slice.name + "Dispatch"]: dispatch,
  };
  if (slice.asyncReducers) {
    const { asyncReducers } = slice;
    const asyncDispatch = async (action) => {
      const async = asyncReducers[action.type];
      if (async) {
        await async(dispatch, action.payload);
        return Promise.resolve();
      }
      dispatch(action);
    };
    obj[slice.name + "Dispatch"] = asyncDispatch;
  }
  return [obj[slice.name + "State"], obj[slice.name + "Dispatch"]];
}
