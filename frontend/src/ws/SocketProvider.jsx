import {io} from "socket.io-client";
import {createContext, useEffect, useState} from "react";
import useAuth from "hooks/auth/useAuth";
import useChatMessages from "hooks/dialog/useChatMessages";

export const SocketContext = createContext(null);

const SocketProvider = ({children}) => {
  const {token} = useAuth();

  const [socket, setSocket] = useState(null);

  const {fetchMessage} = useChatMessages();

  useEffect(() => {
    if (token) {
      const socket =  io("http://127.0.0.1:8081", {
        transports: ["websocket", "polling"],
        auth: {token},
      });

      setSocket(socket);

      socket.on("connect", () => console.log("Socket created:", socket));

      socket.on("connect_error", (error) => console.dir(error));

      socket.on("server:message", (payload) => fetchMessage(payload.message));
    }
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
