import {useContext} from "react";
import {SocketContext} from "ws/SocketProvider";

export default function useSocket() {
  const socket = useContext(SocketContext);

  return {
    socket,
  };
}
