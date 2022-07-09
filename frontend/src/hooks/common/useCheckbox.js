import {useState} from "react";

export default function useCheckbox(initialState = false) {
  const [value, setValue] = useState(initialState);
  const toggle = (event) => setValue(event.target.checked);

  return {
    value,
    setValue,
    toggle,
  };
};
