import {Avatar as MuiAvatar, Badge, styled} from "@mui/material";
import requireImage from "helpers/requireImage";
import PropTypes from "prop-types";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    display: "block",
    position: "absolute",
    top: "1.7rem",
    left: "1.8rem",
    bottom: "0.0625rem",
    right: "0.0625rem",
    width: "0.875rem",
    height: "0.875rem",
    borderRadius: "50%",
    border: "2px solid " + theme.palette.background.primary,
    backgroundColor: "#0ac630",
    flexShrink: "0",
    zIndex: "1",
  },
}));

const Avatar = ({img = null, name = null, online = false, ...props}) => {
  img = img && requireImage(img);

  const openAvatar = () => {
    if (img) {
      window.open(img);
    }
  };

  return (
    <StyledBadge
      invisible={!online}
      overlap="circular"
      variant="dot"
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
    >
      <MuiAvatar
        src={img}
        alt={name}
        onClick={openAvatar}
        {...props}
      >
        {name && name[0]}
      </MuiAvatar>
    </StyledBadge>
  )
}

Avatar.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  online: PropTypes.bool,
};

export default Avatar;
