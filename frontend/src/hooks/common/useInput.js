import {useState} from "react";

export default function useInput(initialState = '') {
  const [value, setValue] = useState(initialState);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleEnterDown = (event, callback) => {
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();

    callback();
  };

  return {
    value,
    setValue,
    handleInput,
    handleEnterDown,
  }
}
