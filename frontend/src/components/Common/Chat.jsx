import {Stack, styled, Typography} from "@mui/material";
import Avatar from "./Avatar";
import PropTypes from "prop-types";

const Root = styled("div")(
  () => ({
    width: "100%",
    display: "flex",
  })
);

const StyledAvatar = styled(Avatar)(
  () => ({
    width: "3rem",
    height: "3rem",
    marginRight: ".5rem",
    cursor: "pointer",
  })
);

const Info = styled(Stack)(
  () => ({
    overflow: "hidden",
    justifyContent: "center",

    cursor: "pointer",
  })
);

const Title = styled(Typography)(
  ({theme}) => ({
    fontSize: "1rem",
    lineHeight: "1.6rem",
    color: theme.palette.text.primary,
  })
);

const Subtitle = styled(Typography)(
  ({theme}) => ({
    fontSize: ".85rem",
    lineHeight: "1.1rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
  })
);

const Chat = ({title, subtitle = "", avatar = "", online = false, onClick = null}) => {
  return (
    <Root>
      <StyledAvatar
        img={avatar}
        name={title}
        online={online}
      />

      <Info onClick={onClick}>
        <Title>{title}</Title>
        {
          subtitle && <Subtitle>{subtitle}</Subtitle>
        }
      </Info>
    </Root>
  );
};

Chat.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool,
  onCLick: PropTypes.func,
};

export default Chat;
