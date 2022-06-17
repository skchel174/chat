import {styled} from "@mui/material";
import MessagesGroup from "./MessagesGroup";
import {useRef, useEffect} from "react";
import PropTypes from "prop-types";

const Box = styled("div")(
  () => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  })
);

const Messages = ({messages}) => {
  const messagesRef = useRef();

  useEffect(() => {
    const lastGroupIdx = messagesRef.current.children.length - 1;
    const group = messagesRef.current.children[lastGroupIdx];

    group.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, []);

  return (
    <Box ref={messagesRef}>
      {
        messages.map(group =>
          <MessagesGroup
            key={group.date}
            group={group}
          />
        )
      }
    </Box>
  )
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages;
