import {useTheme} from "@mui/material";
import DrawerContainer from "components/Common/DrawerContainer";
import GeneralSettingsHeader from "./GeneralSettingsHeader";
import GeneralSettingsFont from "./GeneralSettingsFont";
import GeneralSettingsTheme from "./GeneralSettingsTheme";
import GeneralSettingsTime from "./GeneralSettingsTime";
import GeneralSettingsKeyboard from "./GeneralSettingsKeyboard";
import {useDispatch, useSelector} from "react-redux";
import {setFontSize, setKeyboard, setTheme, setTimeFormat} from "store/settingsSlice";

const GeneralSettings = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const settings = useSelector(state => state.settings);

  const selectFontSize = (event, value) => {
    dispatch(setFontSize({fontSize: value}));
  };

  const selectAppTheme = (event) => {
    dispatch(setTheme({theme: event.target.value}));
  };

  const selectTimeFormat = (event) => {
    dispatch(setTimeFormat({timeFormat: event.target.value}));
  };

  const selectKeyboard = (event) => {
    dispatch(setKeyboard({keyboard: event.target.value}));
  };

  return (
    <DrawerContainer sx={{
      backgroundColor: theme.palette.background.secondary,
    }}>
      <GeneralSettingsHeader/>

      <GeneralSettingsFont
        value={settings.fontSize}
        onChange={selectFontSize}
      />

      <GeneralSettingsTheme
        value={settings.theme}
        onChange={selectAppTheme}
      />

      <GeneralSettingsTime
        value={settings.timeFormat}
        onChange={selectTimeFormat}
      />

      <GeneralSettingsKeyboard
        value={settings.keyboard}
        onChange={selectKeyboard}
      />
    </DrawerContainer>
  );
};

export default GeneralSettings;
