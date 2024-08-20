import { RouterProvider } from "react-router-dom";
import "./App.scoped.scss";
import clsx from "clsx/lite";
import Header from "components/Header";
import { useUserDispatch } from "store/reducer/user";
import { useTaskDispatch } from "store/reducer/task";
import reudcer from "store/store";
import withStore from "hocs/withStore";
import router from "router/index";

const myClass = clsx("bg");
function App() {
  const dispatch = useUserDispatch();
  const taskDispatch = useTaskDispatch();

  return (
    <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-[10px]">
      <Header />
      <div
        className={`${myClass} h-8 w-12 font-Ali`}
        // onClick={() => dispatch({ type: "SET_USER_ASYNC", payload: "小明" })}
        onClick={() => dispatch({ type: "SET_USER", payload: "小明" })}
      >
        你好
      </div>
      <div
        className={`${myClass} h-8 w-96 font-AliMedium`}
        onClick={() => taskDispatch({ type: "SET_TASK", payload: "小明" })}
      >
        小
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default withStore(App, reudcer);
