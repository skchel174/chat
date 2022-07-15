import {Box} from "@mui/material";
import MessagesDate from "./MessagesDate";
import Message from "../Message";
import PropTypes from "prop-types";

const MessagesGroup = ({group}) => {
  return (
    <Box>
      <MessagesDate date={group.date}/>

      {
        group.messages.map(message => {
          return <Box className="messages__item" key={message.id}>
            <Message message={message}/>
          </Box>
        })
      }
    </Box>
  )


};

MessagesGroup.propTypes = {
  group: PropTypes.object.isRequired,
};

export default MessagesGroup;
