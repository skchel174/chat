import {Avatar} from "@mui/material";
import requireImage from "helpers/requireImage";
import PropTypes from "prop-types";

const ChatAvatar = ({img = null, alt = null}) => {
  return (
    <Avatar
      className="chat__avatar"
      sx={{
        height: "100%",
        width: "auto",
        marginRight: ".6rem"
      }}
      src={img && requireImage(img)}
      alt={alt}
    >
      {alt && alt[0]}
    </Avatar>
  )
}

ChatAvatar.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
};

export default ChatAvatar;
