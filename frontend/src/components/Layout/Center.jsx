import {Box, useTheme} from "@mui/material";
import bgImageLight from "assets/img/dialog-bg-light.png";
import useBreakpoints from "hooks/common/useBreakpoints";

const Center = ({isRightOffset, rightOffset, children}) => {
  const theme = useTheme();

  const {md} = useBreakpoints();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#efeae2",
        backgroundImage: `url(${bgImageLight})`,
        backgroundPosition: "top right",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",

        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),

        marginRight: `-${rightOffset}px`,

        ...(md) && {
          marginRight: 0,
        },

        ...((isRightOffset && !md) && {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        }),
      }}
    >
      {children}
    </Box>
  )
};

export default Center
