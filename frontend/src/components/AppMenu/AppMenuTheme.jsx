import MenuItem from "components/Common/MenuItem";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import SwitchButton from "components/Common/SwitchButton";
import {useDispatch} from "react-redux";
import {useTheme} from "@mui/material";
import {changeSettings} from "store/settingsSlice";

const AppMenuTheme = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const changeTheme = () => {
    dispatch(changeSettings({
      theme: (theme.palette.mode === "light" ? "dark" : "light"),
    }));
  };

  return (
    <MenuItem
      icon={<NightsStayOutlinedIcon/>}
      title="Night Mode"
      badge={
        <SwitchButton
          checked={theme.palette.mode === "dark"}
          onChange={changeTheme}
        />
      }
      handleSelect={changeTheme}
    />
  );
};

export default AppMenuTheme;
