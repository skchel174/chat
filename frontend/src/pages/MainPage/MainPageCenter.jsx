import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import {useCenter} from "infrastructure/Context/CenterContext";
import useBreakpoints from "hooks/common/useBreakpoints";
import ComponentResolver from "infrastructure/Context/ComponentResolver";
import bgImageLight from "assets/img/dialog-bg-light.png";
import {styled} from "@mui/material";

const Center = styled("div", {
  shouldForwardProp: (prop) => !["md", "bgImage", "rightOffset", "isRightOffset"].includes(prop),
})(({theme, md, bgImage, rightOffset, isRightOffset}) => ({
  height: "100%",
  width: "100%",
  backgroundColor: "#efeae2",
  backgroundImage: `url(${bgImage})`,
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
}))

const MainPageCenter = () => {
  const rightColumn = useRightColumn();

  const {md} = useBreakpoints();

  const {component} = useCenter();

  return (
    <Center
      md={md}
      bgImage={bgImageLight}
      isRightOffset={rightColumn.isOpen}
      rightOffset={rightColumn.width}
    >
      {
        component && <ComponentResolver is={component}/>
      }
    </Center>
  )
}

export default MainPageCenter;
