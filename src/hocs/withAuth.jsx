import { Navigate } from "react-router-dom";
import { usePageState } from "store/store";

const withAuth = (Component) => (props) => {
  const { userInfo } = usePageState();
  if (!userInfo) {
    return <Navigate to="/login" />;
  }
  return <Component {...props} />;
};

export default withAuth;
