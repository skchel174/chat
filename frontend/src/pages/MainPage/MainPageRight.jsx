import useBreakpoints from "hooks/common/useBreakpoints";
import Drawer from "components/Drawer";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import {useEffect} from "react";
import Search from "sections/Search";
import Profile from "sections/Profile";
import DrawerTransition from "components/DrawerTransition";

const MainPageRight = () => {
  const {md, lg, ex} = useBreakpoints();

  const {rightColumn} = useMainPageLayout();

  useEffect(() => {
    if (ex) {
      rightColumn.setWidth(600);
    } else if (lg) {
      rightColumn.setWidth(365);
    } else {
      rightColumn.setWidth(400);
    }
  }, [ex, lg]);

  return (
    <Drawer
      anchor="right"
      elevation={md ? 5 : 0}
      width={rightColumn.width}
      open={rightColumn.isOpen}
      variant={md ? "temporary" : "persistent"}
    >
      <DrawerTransition show={rightColumn.component === "Search"}>
        <Search/>
      </DrawerTransition>

      <DrawerTransition show={rightColumn.component === "Profile"}>
        <Profile/>
      </DrawerTransition>
    </Drawer>
  );
}

export default MainPageRight;


