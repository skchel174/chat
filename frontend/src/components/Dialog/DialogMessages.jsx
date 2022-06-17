import {Box} from "@mui/material";

const DialogMessages = ({children}) => {
  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "auto",

      "&::-webkit-scrollbar": {
        backgroundColor: "none",
      },
    }}>
      {children}
    </Box>
  )
}

export default DialogMessages;
