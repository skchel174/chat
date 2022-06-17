import {Avatar} from "@mui/material";
import requireImage from "helpers/requireImage";
import PropTypes from "prop-types";

const MessageAvatar = ({img = null, alt = null}) => {
  return (
    <Avatar
      sx={{marginRight: ".4rem"}}
      src={img && requireImage(img)}
      alt={alt}
    >
      {alt && alt[0]}
    </Avatar>
  )
};

MessageAvatar.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
};

export default MessageAvatar;
