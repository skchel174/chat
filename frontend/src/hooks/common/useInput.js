import {useState} from "react";

export default function useInput(initialState = "") {
  const [value, setValue] = useState(initialState);

  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    error,
    setError,
    handleInput,
  }
}
