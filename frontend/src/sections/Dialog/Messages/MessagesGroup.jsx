import {Box} from "@mui/material";
import MessagesItem from "./MessagesItem";
import MessagesDate from "./MessagesDate";
import PropTypes from "prop-types";

const MessagesGroup = ({group}) => {
  return (
    <Box>
      <MessagesDate date={group.date}/>

      {
        group.messages.map(message => <MessagesItem
          key={message.id}
          message={message}
        />)
      }
    </Box>
  )


};

MessagesGroup.propTypes = {
  group: PropTypes.object.isRequired,
};

export default MessagesGroup;
