import {Routes, Route} from "react-router-dom";
import ThemeProvider from "infrastructure/Theme/ThemeProvider";
import {Box} from "@mui/material";
import MainPage from "pages/MainPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";

const App = () => {
  const styles = {
    width: "100%",
    height: "100%",
  };

  return (
    <ThemeProvider>
      <Box
        className="App"
        sx={styles}
      >
        <Routes>
          <Route
            path="/"
            element={<MainPage/>}
          />

          <Route
            path="*"
            element={<NotFoundPage/>}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
