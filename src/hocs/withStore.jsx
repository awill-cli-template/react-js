import { useReducer, createContext, useMemo, useContext, useCallback } from "react";

export const PageStateContext = createContext(null);
export const PageDispatchContext = createContext(null);

/**
 * @description 高阶组件，用于集中式管理状态
 * @param {ReactDOM} Component 包裹的组件
 * @param {object} reducer 状态管理器，包含name、initialState、syncAction、asyncAction
 * @returns {ReactDOM} 返回新的组件，在组件或者其子组件中使用usePageState和usePageDispatch用作状态管理
 */
const withStore = (Component, reducer) => (props) => {
  /*
    透传，组件只会找最近的Provider，所以要找到最近的Provider，
    然后把其他的Provider透传下去，这样才能掉用祖先的dispatch和state，
    但不能调用同级别兄弟的，同级别可以放到父组件的Provider里，
    一般用于后台管理系统中。
  */
  const preState = useContext(PageStateContext);
  const preDispatch = useContext(PageDispatchContext);
  const reduce = (state, action) => {
    const sync = reducer.syncAction[action.type];
    if (sync) {
      return sync(state, action);
    }
    console.error("Unknown action: " + action.type);
    return state;
  };

  const [state, dispatch] = useReducer(reduce, reducer.initialState);

  const asyncDispatch = useCallback(
    (action) => {
      const async = reducer.asyncAction[action.type];
      if (async) {
        async(dispatch);
        return;
      }
      dispatch(action);
    },
    [dispatch],
  );

  const stateProvider = useMemo(() => {
    return {
      [reducer.name + "State"]: state,
    };
  }, [state]);

  const dispatchProvider = useMemo(() => {
    return {
      [reducer.name + "Dispatch"]: asyncDispatch,
    };
  }, [asyncDispatch]);

  return (
    <PageStateContext.Provider value={{ ...stateProvider, ...preState }}>
      <PageDispatchContext.Provider value={{ ...dispatchProvider, ...preDispatch }}>
        <Component {...props} />
      </PageDispatchContext.Provider>
    </PageStateContext.Provider>
  );
};

export default withStore;
