import {Avatar} from "@mui/material";
import requireImage from "helpers/requireImage";
import PropTypes from "prop-types";

const ChatAvatar = ({img = null, name = null, ...props}) => {

  img = img && requireImage(img);

  const openAvatar = () => {
    if (img) {
      window.open(img);
    }
  };

  return (
    <Avatar
      src={img}
      alt={name}
      onClick={openAvatar}
      {...props}
    >
      {name && name[0]}
    </Avatar>
  )
}

ChatAvatar.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
};

export default ChatAvatar;
