import {ListItemButton} from "@mui/material";
import PropTypes from "prop-types";

const ItemButton = ({children, onClick, sx = {}}) => {
  return (
    <ListItemButton
      sx={{
        width: "100%",
        padding: "1rem",
        lineHeight: "1.5rem",
        borderRadius: ".75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </ListItemButton>
  );
};

ItemButton.propTypes = {
  onCLick: PropTypes.func,
  sx: PropTypes.object,
};

export default ItemButton;
