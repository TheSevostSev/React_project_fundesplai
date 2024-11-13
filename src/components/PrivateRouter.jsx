import { useEffect } from "react";
import { useUserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component }) => {
  const { user } = useUserContext();
  const navigator = useNavigate();

  if (user?.token) {
    return <Component />;
  }

  useEffect(() => {
    navigator("/login");
  }, []);
};

export default PrivateRoute;
