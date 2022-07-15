import {ListItemButton, styled} from "@mui/material";
import PropTypes from "prop-types";

const Root = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({theme, active}) => ({
  position: "relative",
  width: "100%",
  padding: "1rem",
  borderRadius: ".75rem",
  display: "flex",
  alignItems: "center",
  flexGrow: 0,
  backgroundColor: active ? theme.palette.active.primary : "inherit",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: (active ? theme.palette.active.primary : theme.palette.background.secondary) + "!important",
  },

  "& p, span": {
    color: (active && theme.palette.text.neutral),
  }
}));

const ItemButton = ({children, ...props}) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  );
};

ItemButton.propTypes = {
  onCLick: PropTypes.func,
  sx: PropTypes.object,
};

export default ItemButton;
