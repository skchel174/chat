import AppLoading from "sections/AppLoading";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {saveToken} from "store/userSlice";
import authorize from "store/userSlice/reducers/authorize";
import localStorage from "helpers/localStorage";

const Auth = ({children}) => {
  let token = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      token = localStorage.get("token");
      dispatch(saveToken({token}));
    }

    if (token && !user) {
      dispatch(authorize({token}));
    }
  }, []);

  const authStatus = useSelector(state => state.user.requestStatus);

  if (authStatus === "auth.pending") {
    return <AppLoading/>;
  }

  return children;
};

export default Auth;
