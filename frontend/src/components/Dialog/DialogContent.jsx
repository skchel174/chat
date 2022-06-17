import {Box} from "@mui/material";

const DialogContent = ({children}) => {
  return (
    <Box sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {children}
    </Box>
  );
}

export default DialogContent;
