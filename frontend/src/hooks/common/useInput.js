import {useState} from "react";

export default function useInput(initialState = '') {
  const [value, setValue] = useState(initialState);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    handleInput,
  }
}
