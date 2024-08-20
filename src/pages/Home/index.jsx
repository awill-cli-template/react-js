import withStore from "hocs/withStore";
import withAuth from "hocs/withAuth";
import reducer from "./store";
import Header from "./components/Header";
import { usePageState } from "./store";
import { usePageState as useAppState, usePageDispatch as useAppDispatch } from "store/store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { task } = usePageState();
  const { userInfo } = useAppState();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    appDispatch({ type: "RESET_USER_INFO" });
    navigate("/login");
  };
  return (
    <div className="flex w-full gap-2">
      <Header />
      <h1>
        Home {task} {userInfo.name}
      </h1>
      <h1 onClick={handleClick}>Exit</h1>
      <h1 onClick={() => navigate("/about")}>Go About</h1>
    </div>
  );
};

export default withAuth(withStore(Home, reducer));
