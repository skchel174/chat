import {useEffect} from "react";
import Drawer from "components/Drawer";
import useBreakpoints from "hooks/common/useBreakpoints";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import DrawerTransition from "components/DrawerTransition";
import Chats from "sections/Chats";
import SettingsMenu from "sections/Settings/Menu";
import ProfileSettings from "sections/Settings/Profile";
import GeneralSettings from "sections/Settings/General";
import BackgroundSettings from "sections/Settings/Background";

const MainPageLeft = () => {
  const {leftColumn} = useMainPageLayout();

  useEffect(() => {
    leftColumn.setComponent("Chats")
  }, []);

  const {ex, sm, lg} = useBreakpoints();

  useEffect(() => {
    if (ex) {
      leftColumn.setWidth(600);
    } else if (sm) {
      leftColumn.setWidth(365);
    } else {
      leftColumn.setWidth(400);
    }

    if (!ex) {
      leftColumn.open();
    }
  }, [ex, sm, lg]);

  return (
    <Drawer
      anchor="left"
      elevation={0}
      width={leftColumn.width}
      open={leftColumn.isOpen}
      variant={leftColumn.isOpen ? "persistent" : "temporary"}
    >
      <DrawerTransition show={leftColumn.component === "Chats"}>
        <Chats/>
      </DrawerTransition>

      <DrawerTransition show={leftColumn.component === "SettingsMenu"}>
        <SettingsMenu/>
      </DrawerTransition>

      <DrawerTransition show={leftColumn.component === "ProfileSettings"}>
        <ProfileSettings/>
      </DrawerTransition>

      <DrawerTransition show={leftColumn.component === "GeneralSettings"}>
        <GeneralSettings/>
      </DrawerTransition>

      <DrawerTransition show={leftColumn.component === "BackgroundSettings"}>
        <BackgroundSettings/>
      </DrawerTransition>
    </Drawer>
  )
}

export default MainPageLeft;
