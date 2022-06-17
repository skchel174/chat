import {Box} from "@mui/material";

const ChatsContainer = ({children}) => {
  return (
    <Box
      className="chats__container"
      sx={{
        height: "100%",
        padding: ".5rem",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default ChatsContainer;
