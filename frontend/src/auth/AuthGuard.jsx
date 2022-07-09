import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const AuthGuard = ({children}) => {
  const token = useSelector(state => state.user.token);

  if (!token) {
    return <Navigate to="/login"/>
  }

  return children;
};

export default AuthGuard;
