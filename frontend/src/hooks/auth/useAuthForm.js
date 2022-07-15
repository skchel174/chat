import useInput from "hooks/common/useInput";
import useCheckbox from "hooks/common/useCheckbox";
import {useState} from "react";

export default function useAuthForm() {
  const email = useInput();
  const login = useInput();
  const name = useInput();
  const password = useInput();
  const passwordConfirmation = useInput();
  const remember = useCheckbox();

  const [error, setError] = useState(null);

  const handleSubmit = async (cd) => {
    const errorMsg = validateForm();

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    cd();
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
    handleSubmit,
  };
}
