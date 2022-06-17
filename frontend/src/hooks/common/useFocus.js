import {useState} from "react";

export default function useFocus(initialState = false) {
  const [value, setValue] = useState(initialState);

  const focus = () => setValue(true);
  const blur = () => setValue(false);

  return {
    value,
    setValue,
    focus,
    blur,
  }
}
