import { usePageDispatch } from "store/store";
import { useNavigate } from "react-router-dom";
import { Get } from "apis/request";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = usePageDispatch();
  const handleClick = () => {
    Get("/user/1", { a: 1 }).then((res) => {
      dispatch({ type: "SET_USER_INFO", payload: { name: "张三", age: 18 } });
      navigate("/home");
    });
  };
  return (
    <div className="h-10 w-36 bg-red-400">
      <h1 onClick={handleClick}>Login</h1>
    </div>
  );
};

export default Login;
