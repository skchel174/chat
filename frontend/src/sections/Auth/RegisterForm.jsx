import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField";
import useAuthForm from "hooks/auth/useAuthForm";
import useAuth from "hooks/auth/useAuth";

const RegisterForm = () => {
  const {
    email,
    login,
    name,
    password,
    passwordConfirmation,
    error,
    handleSubmit,
  } = useAuthForm();

  const {requestStatus, register} = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(() => register(email.value, login.value, name.value, password.value));
  };

  return (
    <form onSubmit={onSubmit}>
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
        loading={requestStatus === "register.pending"}
      />
    </form>
  )
};

export default RegisterForm;
