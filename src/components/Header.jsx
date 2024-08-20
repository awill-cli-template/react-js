import "./Header.scoped.scss";
import { useUserState } from "store/reducer/user";
import { useTaskState } from "store/reducer/task";

const Header = () => {
  const state = useUserState();
  const taskState = useTaskState();
  return (
    <header className="bg p-4 text-slate-800">
      <h1 className="text-xl">{state.user}</h1>
      <h1 className="text-xl">{taskState.task}</h1>
    </header>
  );
};

export default Header;
