import {Box} from "@mui/material";
import PropTypes from "prop-types";

const MessageAuthor = ({author}) => {
  return (
    <Box sx={{
      fontSize: ".8rem",
      marginBottom: ".4rem",
      fontWeight: 600,
    }}>
      {author}
    </Box>
  )
}

MessageAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};

export default MessageAuthor;
