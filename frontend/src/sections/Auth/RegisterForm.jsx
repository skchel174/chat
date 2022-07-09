import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField";
import useAuthForm from "hooks/auth/useAuthForm";
import {useSelector} from "react-redux";

const RegisterForm = () => {
  const {
    email,
    login,
    name,
    password,
    passwordConfirmation,
    error,
    submitRegister,
  } = useAuthForm();

  const registerStatus = useSelector(state => state.user.requestStatus)

  return (
    <>
      <InputField
        sx={{marginBottom: "1.5rem"}}
        label="Email"
        type="email"
        value={email.value}
        onChange={email.handleInput}
        error={error && email.error}
        onError={email.setError}
        required
      />

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
        label="Name"
        value={name.value}
        onChange={name.handleInput}
        error={error && name.error}
        onError={name.setError}
        required
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

      <InputField
        sx={{marginBottom: "1.5rem"}}
        type="password"
        label="Password confirmation"
        value={passwordConfirmation.value}
        onChange={passwordConfirmation.handleInput}
        error={error && passwordConfirmation.error}
        onError={passwordConfirmation.setError}
        required
        confirm={password.value}
      />

      <SubmitButton
        label="Register"
        loading={registerStatus === "register.pending"}
        onClick={submitRegister}
      />
    </>
  )
};

export default RegisterForm;
