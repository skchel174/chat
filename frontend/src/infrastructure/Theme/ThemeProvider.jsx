import {createTheme, ThemeProvider as MuiThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

const ThemeProvider = ({children}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() =>
      createTheme({
        palette: {
          ...(!prefersDarkMode ? DarkTheme : LightTheme),
        },
      }), [prefersDarkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
