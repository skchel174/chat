import {useState} from "react";
import {useTheme} from "@mui/material";
import DrawerContainer from "components/Common/DrawerContainer";
import GeneralSettingsHeader from "./GeneralSettingsHeader";
import GeneralSettingsFont from "./GeneralSettingsFont";
import GeneralSettingsTheme from "./GeneralSettingsTheme";
import GeneralSettingsTime from "./GeneralSettingsTime";
import GeneralSettingsKeyboard from "./GeneralSettingsKeyboard";

const GeneralSettings = () => {
  const theme = useTheme();

  const [fontSize, setFontSize] = useState(16);
  const selectFontSize = (event, value) => setFontSize(value);

  const [appTheme, setAppTheme] = useState("light");
  const selectAppTheme = (event) => setAppTheme(event.target.value);

  const [timeFormat, setTimeFormat] = useState(24);
  const selectTimeFormat = (event) => setTimeFormat(event.target.value);

  const [keyboard, setKeyboard] = useState("enter");
  const selectKeyboard = (event) => setKeyboard(event.target.value);

  return (
    <DrawerContainer sx={{
      backgroundColor: theme.palette.background.secondary,
    }}>
      <GeneralSettingsHeader/>

      <GeneralSettingsFont
        value={fontSize}
        onChange={selectFontSize}
      />

      <GeneralSettingsTheme
        value={appTheme}
        onChange={selectAppTheme}
      />

      <GeneralSettingsTime
        value={timeFormat}
        onChange={selectTimeFormat}
      />

      <GeneralSettingsKeyboard
        value={keyboard}
        onChange={selectKeyboard}
      />
    </DrawerContainer>
  );
};

export default GeneralSettings;
