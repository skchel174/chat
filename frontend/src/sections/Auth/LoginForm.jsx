import {Stack} from "@mui/material";
import Checkbox from "components/Checkbox";
import SubmitButton from "components/SubmitButton";
import useAuthForm from "hooks/auth/useAuthForm";
import InputField from "components/InputField";
import RouterLink from "components/RouterLink";
import {useSelector} from "react-redux";

const LoginForm = () => {
  const {
    login,
    password,
    remember,
    error,
    submitLogin,
  } = useAuthForm();

  const loginStatus = useSelector(state => state.user.requestStatus)

  return (
    <>
      <InputField
        sx={{marginBottom: "1.5rem"}}
        label="Login"
        value={login.value}
        onChange={login.handleInput}
        error={error && login.error}
        onError={login.setError}
        required
        min={3}
      />

      <InputField
        sx={{marginBottom: "1.5rem"}}
        type="password"
        label="Password"
        value={password.value}
        onChange={password.handleInput}
        error={error && password.error}
        onError={password.setError}
        required
        min={6}
      />

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{marginBottom: "1.5rem"}}
      >
        <Checkbox
          value={remember.value}
          onChange={remember.toggle}
          setValue={remember.setValue}
          label="Remember me"
        />

        <RouterLink
          fontSize=".9rem"
          label="Forgot password?"
          to="#"
        />
      </Stack>

      <SubmitButton
        label="Login"
        loading={loginStatus === "login.pending"}
        onClick={submitLogin}
      />
    </>
  )
};

export default LoginForm;
