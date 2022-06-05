import {Routes, Route} from "react-router-dom";
import MainPage from "pages/Main/MainPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import {Box} from "@mui/material";

const App = () => {
  return (
    <Box
      className="App"
      sx={{
        width: "100%",
        height: "100%",
      }}
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
  );
}

export default App;
