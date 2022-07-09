import {Routes, Route} from "react-router-dom";
import ThemeProvider from "infrastructure/Theme/ThemeProvider";
import {Box} from "@mui/material";
import MainPage from "pages/MainPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import AuthLayout from "layouts/AuthLayout";
import AuthGuard from "infrastructure/Auth/AuthGuard";
import GuestGuard from "infrastructure/Auth/GuestGuard";
import Auth from "infrastructure/Auth/Auth";

const App = () => {
  const styles = {
    width: "100%",
    height: "100%",
  };

  return (
    <ThemeProvider>
      <Auth>
        <Box
          className="App"
          sx={styles}
        >
          <Routes>
            <Route
              path="/"
              element={
                <AuthGuard>
                  <MainPage/>
                </AuthGuard>
              }
            />

            <Route element={
              <GuestGuard>
                <AuthLayout/>
              </GuestGuard>
            }>
              <Route
                path="/login"
                element={<SignInPage/>}
              />

              <Route
                path="/register"
                element={<SignUpPage/>}
              />
            </Route>

            <Route
              path="*"
              element={<NotFoundPage/>}
            />
          </Routes>
        </Box>
      </Auth>
    </ThemeProvider>
  );
}

export default App;
