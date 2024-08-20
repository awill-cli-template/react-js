import withStore from "hocs/withStore";
import withAuth from "hocs/withAuth";
import reducer from "./store";
import Header from "./components/Header";
import { usePageState } from "./store";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { task } = usePageState();
  const navigate = useNavigate();
  return (
    <div className="flex w-full gap-4">
      <Header />
      <h1>About {task}</h1>
      <h1 onClick={() => navigate("/")}>Go Home</h1>
    </div>
  );
};

export default withAuth(withStore(About, reducer));
