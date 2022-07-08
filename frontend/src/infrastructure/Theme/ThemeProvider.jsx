import {createTheme, ThemeProvider as MuiThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import {useSelector} from "react-redux";

const ThemeProvider = ({children}) => {
  const settings = useSelector(state => state.settings.data);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    let value = settings.theme;

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
