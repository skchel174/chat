import {useDispatch, useSelector} from "react-redux";
import {resetState, saveToken} from "store/userSlice";
import loginReducer from "store/userSlice/actions/login";
import registerReducer from "store/userSlice/actions/register";
import {useNavigate} from "react-router-dom";
import localStorage from "helpers/localStorage";
import authorize from "store/userSlice/actions/authorize";
import useSocket from "hooks/common/useSocket";
import api from "api";

// todo: refactored useAuth hook
export default function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {socket} = useSocket();

  const requestStatus = useSelector(state => state.user.requestStatus);
  const user = useSelector(state => state.user.data);
  const token = useSelector(state => state.user.token);

  const auth = (token) => {
    if (!token) {
      token = localStorage.get("token");
      dispatch(saveToken({token}));
    }

    if (token) {
      dispatch(authorize({token}));
    }
  };

  const login = async (login, password, remember) => {
    const response = await dispatch(loginReducer({
      login,
      password,
      remember,
    }));

    if (remember) {
      localStorage.set("token", response.payload.data.token);
    }

    navigate("/");
  };

  const register = async (email, login, name, password) => {
    await dispatch(registerReducer({
      email,
      login,
      name,
      password,
    }));

    navigate("/");
  };

  const logout = () => {
    dispatch(resetState());
    localStorage.remove("token");
    socket.disconnect();
    api.user.logout();
  };

  return {
    user,
    token,
    requestStatus,
    auth,
    login,
    register,
    logout,
  }
}
