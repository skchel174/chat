import {Box, useTheme} from "@mui/material";

const FormField = ({children}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        padding: "15px 15px",
        width: "100%!important",
        display: "flex",
        alignItems: "flex-end",
        borderRadius: "10px 10px 0 10px",
        backgroundColor: theme.palette.background.primary,
        boxShadow: "0 1px 2px 0 rgba(114, 114, 114, .25)",

        "& .MuiInputBase-root": {
          padding: "3px 0",
        }
    }}>
      {children}
    </Box>
  )
}

export default FormField;
