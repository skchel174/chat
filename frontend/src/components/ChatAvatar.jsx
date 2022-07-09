import {Avatar} from "@mui/material";
import requireImage from "helpers/requireImage";
import PropTypes from "prop-types";

const ChatAvatar = ({sx = {}, img = null, name = null}) => {
  return (
    <Avatar
      sx={sx}
      src={img && requireImage(img)}
      alt={name}
    >
      {name && name[0]}
    </Avatar>
  )
}

ChatAvatar.propTypes = {
  sx: PropTypes.object,
  alt: PropTypes.string,
  img: PropTypes.string,
};

export default ChatAvatar;
