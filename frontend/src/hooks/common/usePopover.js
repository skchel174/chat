import {useState} from "react";

export default function usePopover(position) {
  const [anchor, setAnchor] = useState(null);

  const open = (event) => setAnchor(event.currentTarget);
  const close = () => setAnchor(null);

  return {
    position,
    anchor,
    setAnchor,
    open,
    close,
  }
}
