import {Popover as MuiPopover, styled} from "@mui/material";
import PropTypes from "prop-types";

const Popover = styled(MuiPopover)(
  ({theme}) => ({
    "& .MuiPaper-root": {
      borderRadius: ".75rem",
      minWidth: "15rem",
      padding: ".25rem 0",
      backdropFilter: "blur(8px)",
      backgroundColor: theme.palette.background.blur,
      boxShadow: theme.palette.shadow.primary,
      zIndex: 9000,
    },
  })
);

const Menu = ({position, anchor, handleClose, children}) => {
  const isOpen = Boolean(anchor);

  return (
    <Popover
      className="menu"
      open={isOpen}
      anchorEl={anchor}
      onClose={handleClose}
      anchorOrigin={position.anchor ?? position}
      transformOrigin={position.transform && position.transform}
    >
      {children}
    </Popover>
  );
};

Menu.propTypes = {
  anchor: PropTypes.object,
  position: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Menu;
