import {Box, useTheme} from "@mui/material";

const HeaderTitle = ({children}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      marginLeft: "1.375rem",
      fontSize: "1.25rem",
      fontWeight: 500,
      color: theme.palette.text.primary,
    }}>
      {children}
    </Box>
  )
};

export default HeaderTitle;
