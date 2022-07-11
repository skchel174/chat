import ThemeProvider from "theme/ThemeProvider";
import Router from "router";
import Auth from "auth";

const App = () => {
  return (
    <ThemeProvider>
      <Auth>
        <Router/>
      </Auth>
    </ThemeProvider>
  );
}

export default App;
