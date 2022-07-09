import {createTheme, ThemeProvider as MuiThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "store/settingsSlice";

const ThemeProvider = ({children}) => {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    let value = settings.theme;

    if (!value) {
      value = "system";
      dispatch(setTheme({theme: "system"}));
    }

    if (value === "system") {
      value = prefersDarkMode ? "dark" : "light";
    }

    return createTheme({
      palette: {...(value === "dark" ? DarkTheme : LightTheme)},
    });
  }, [settings.theme, prefersDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
