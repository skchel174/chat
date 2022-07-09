import ThemeProvider from "infrastructure/Theme/ThemeProvider";
import {styled} from "@mui/material";
import Router from "router";
import Auth from "auth";

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
