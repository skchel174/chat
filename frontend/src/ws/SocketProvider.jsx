import {io} from "socket.io-client";
import {createContext, useEffect, useState} from "react";
import useAuth from "hooks/auth/useAuth";
import useChatMessages from "hooks/dialog/useChatMessages";
import {useDispatch} from "react-redux";
import {addOnline, removeOnline, setOnline} from "store/chatsSlice";

export const SocketContext = createContext(null);

const SocketProvider = ({children}) => {
  const dispatch = useDispatch();

  const {token} = useAuth();

  const [socket, setSocket] = useState(null);

  const {fetchMessage} = useChatMessages();

  useEffect(() => console.log("SocketProvider mounted"), [])

  useEffect(() => {
    if (token) {
      const socket =  io("http://127.0.0.1:81", {
        transports: ["websocket", "polling"],
        auth: {token},
      });

      setSocket(socket);

      socket.on("connect", () => console.log("Socket created:", socket));

      socket.on("connect_error", (error) => console.dir(error));

      socket.on("message", ({message}) => fetchMessage(message));

      socket.on("users_online", ({users}) => {
        console.log("users_online", users)
        dispatch(setOnline({users}));
      });

      socket.on("user_online", ({user}) => {
        console.log("user_online", user)
        dispatch(addOnline({user}));
      });

      socket.on("user_offline", ({user, datetime}) => {
        console.log("SocketProvider user_offline", user, datetime)
        dispatch(removeOnline({user}));
      });
    }
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
