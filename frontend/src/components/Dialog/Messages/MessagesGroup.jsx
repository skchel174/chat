import Message from "../Message";
import {Box} from "@mui/material";
import PropTypes from "prop-types";
import MessagesDate from "./MessagesDate";

const MessagesGroup = ({group}) => {
  return (
    <Box key={group.date}>
      <MessagesDate date={group.date}/>

      {
        group.messages.map(message =>
          <Message
            key={message.id}
            message={message}
          />
        )
      }
    </Box>
  )
}

MessagesGroup.propTypes = {
  group: PropTypes.object.isRequired,
};

export default MessagesGroup;
