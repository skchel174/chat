import {Box, useTheme} from "@mui/material";

const FormIcon = ({children}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",

        "& .MuiSvgIcon-root": {
          fontSize: "1.8rem",
          color: theme.palette.text.secondary,
          transition: "color .3s",

          "&:hover": {
            color: theme.palette.active.primary,
          }
        }
      }}
    >
      {children}
    </Box>
  )
};

export default FormIcon;
