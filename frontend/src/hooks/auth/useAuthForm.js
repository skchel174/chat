import useInput from "hooks/common/useInput";
import useCheckbox from "hooks/common/useCheckbox";
import {useState} from "react";
import {useDispatch} from "react-redux";
import userLogin from "store/userSlice/reducers/login";
import register from "store/userSlice/reducers/register";
import {useNavigate} from "react-router-dom";

export default function useAuthForm() {
  const email = useInput();
  const login = useInput();
  const name = useInput();
  const password = useInput();
  const passwordConfirmation = useInput();
  const remember = useCheckbox();

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitRegister = async () => {
    const errorMsg = validateForm();

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    await dispatch(register({
      email: email.value,
      login: login.value,
      name: name.value,
      password: password.value,
    }));

    navigate("/");
  };

  const submitLogin = async () => {
    const errorMsg = validateForm();

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    await dispatch(userLogin({
      login: login.value,
      password: password.value,
      remember: remember.value,
    }));

    navigate("/");
  };

  const validateForm = () => {
    return email.error
      || login.error
      || name.error
      || password.error
      || passwordConfirmation.error;
  };

  return {
    email,
    login,
    name,
    password,
    passwordConfirmation,
    remember,
    error,
    submitRegister,
    submitLogin,
  };
}
