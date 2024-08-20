import { usePageDispatch } from "../store";

const Header = () => {
  const dispatch = usePageDispatch();
  return (
    <>
      <div className="h-8 w-96 bg-pink-400" onClick={() => dispatch({ type: "SET_TASK", payload: "小明" })}>
        Header
      </div>
    </>
  );
};

export default Header;
