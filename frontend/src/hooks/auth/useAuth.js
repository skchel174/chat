import {useDispatch, useSelector} from "react-redux";
import {resetState} from "store/userSlice";
import loginReducer from "store/userSlice/reducers/login";
import registerReducer from "store/userSlice/reducers/register";
import {useNavigate} from "react-router-dom";
import localStorage from "helpers/localStorage";
import api from "api";

export default function useAuth() {
  const user = useSelector(state => state.user.data);
  const token = useSelector(state => state.user.data);
  const requestStatus = useSelector(state => state.user.requestStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (login, password, remember) => {
    const response = await dispatch(loginReducer({
      login,
      password,
      remember,
    }));

    if (remember) {
      localStorage.set("token", response.data.token);
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
    api.user.logout();
  };

  return {
    user,
    token,
    requestStatus,
    login,
    register,
    logout,
  }
}
