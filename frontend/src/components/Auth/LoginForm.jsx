import {Stack} from "@mui/material";
import Checkbox from "components/Common/Checkbox";
import SubmitButton from "components/Common/SubmitButton";
import InputField from "components/Common/InputField";
import RouterLink from "components/Common/RouterLink";
import useAuth from "hooks/auth/useAuth";
import useAuthForm from "hooks/auth/useAuthForm";

const LoginForm = () => {
  const {
    login,
    password,
    remember,
    error,
    handleSubmit,
  } = useAuthForm();

  const {requestStatus, login: submitLogin} = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(() => submitLogin(login.value, password.value, remember.value));
  };

  return (
    <form onSubmit={onSubmit}>
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
        loading={requestStatus === "login.pending"}
      />
    </form>
  )
};

export default LoginForm;
