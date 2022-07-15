import {Box, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import useBreakpoints from "hooks/common/useBreakpoints";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import Dialog from "components/Dialog";
import backgroundImg from "assets/img/background.png"

const MainPageMiddle = () => {
  const {rightColumn} = useMainPageLayout();

  const {md} = useBreakpoints();

  const settings = useSelector(state => state.settings.data);

  const theme = useTheme();

  const [bgColor, setBgColor] = useState(settings.color);

  useEffect(() => {
    settings.tmpColor !== null ? setBgColor(settings.tmpColor) : setBgColor(settings.color);
  }, [settings.color, settings.tmpColor]);

  return (
    <Box sx={{
      height: "100%",
      width: "100%",
      backgroundColor: bgColor,
      transition: theme.transitions.create(["margin", "background-color"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),

      marginRight: `-${rightColumn.width}px`,

      ...(md) && {
        marginRight: 0,
      },

      ...((rightColumn.isOpen && !md) && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    }}>
      <Box sx={{
        backgroundColor: theme.palette.mode === "dark" && "rgb(0, 0, 0, .5)",
        backgroundImage: `url(${settings.defaultWallpapers && backgroundImg})`,
        backgroundPosition: "top right",
        backgroundSize: "400px auto",
        backgroundRepeat: "repeat",
        height: "100%",
        width: "100%",
      }}>
        <Dialog/>
      </Box>
    </Box>
  )
};

export default MainPageMiddle;
