import {Avatar as MuiAvatar, Box, styled} from "@mui/material";
import requireImage from "helpers/requireImage";
import PropTypes from "prop-types";

const Info = styled("div")(
  ({theme}) => ({
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    padding: "0 1.5rem 0.5rem",
    background: "linear-gradient(0deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 0) 100%)",
    display: "flex",
    flexDirection: "column",
    color: theme.palette.text.neutral,
  })
)

const Title = styled("h3")(
  () => ({
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: "1.275rem",
    marginBottom: ".25rem",
  })
);

const Subtitle = styled("span")(
  () => ({
    fontSize: ".875rem",
    opacity: ".5",
  })
);

const Avatar = styled(MuiAvatar)(
  () => ({
    width: "100%",
    height: "100%",
    cursor: "pointer",
    fontSize: "10rem",
    minHeight: "350px",
  })
);

const ProfileAvatar = ({title, subtitle = null, avatar = null}) => {
  return (
    <Box sx={{position: "relative"}}>
      <Avatar src={avatar && requireImage(avatar)} variant="square">
        {title[0]}
      </Avatar>

      <Info>
        <Title>{title}</Title>
        {
          subtitle && <Subtitle>{subtitle}</Subtitle>
        }
      </Info>
    </Box>
  )
};

ProfileAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  avatar: PropTypes.string,
};

export default ProfileAvatar;
