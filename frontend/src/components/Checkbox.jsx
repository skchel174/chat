import {Box, Typography, Checkbox as MuiCheckbox, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const Checkbox = ({value, onChange, setValue = null, label = null, sx = {}}) => {

  const theme = useTheme();

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      ...sx,
    }}>
      <MuiCheckbox
        sx={{padding: 0}}
        disableRipple
        checked={value}
        onChange={onChange}
      />

      {
        label && <Typography
          sx={{
            marginLeft: "1rem",
            userSelect: "none",
            color: theme.palette.text.primary,
          }}
          component="span"
          onClick={setValue && (() => setValue(!value))}
        >
          {label}
        </Typography>
      }
    </Box>
  )
};

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  setValue: PropTypes.func,
  label: PropTypes.string,
  sx: PropTypes.object,
};

export default Checkbox;
