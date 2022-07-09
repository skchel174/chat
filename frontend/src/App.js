import ThemeProvider from "infrastructure/Theme/ThemeProvider";
import {styled} from "@mui/material";
import Auth from "infrastructure/Auth/Auth";
import Router from "router";

const Root = styled("div")(
  () => ({
    width: "100%",
    height: "100%",
  })
);

const App = () => {
  return (
    <ThemeProvider>
      <Auth>
        <Root>
          <Router/>
        </Root>
      </Auth>
    </ThemeProvider>
  );
}

export default App;
