import PropTypes from "prop-types";
import {ListItemButton, useTheme} from "@mui/material";

const ChatContainer = ({active = false, children}) => {
  const theme = useTheme();

  return (
    <ListItemButton
      className="folder__container"
      sx={{
        position: "relative",
        width: "100%",
        height: "4.7rem",
        padding: ".55rem",
        borderRadius: ".75rem",
        display: "flex",
        backgroundColor: active ? theme.palette.active.primary : "inherit",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: (active ? theme.palette.active.primary : theme.palette.background.secondary) + "!important",
        },

        "& .chat__title, .chat__subtitle, .folder__date": {
          color: (active && theme.palette.text.neutral),
        }
      }}
    >
      {children}
    </ListItemButton>
  )
}

ChatContainer.propTypes = {
  active: PropTypes.bool,
};

export default ChatContainer;
