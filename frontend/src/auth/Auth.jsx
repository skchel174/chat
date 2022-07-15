import AppLoading from "sections/AppLoading";
import {useEffect} from "react";
import useAuth from "hooks/auth/useAuth";

const Auth = ({children}) => {
  const {user, token, requestStatus, auth} = useAuth();

  useEffect(() => {
    if (!user) {
      auth(token);
    }
  }, []);

  if (requestStatus === "auth.pending") {
    return <AppLoading/>;
  }

  return children;
};

export default Auth;
