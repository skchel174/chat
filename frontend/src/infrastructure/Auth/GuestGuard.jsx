import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const GuestGuard = ({children}) => {
  const token = useSelector(state => state.user.token);

  if (token) {
    return <Navigate to="/"/>
  }

  return children;
};

export default GuestGuard;
