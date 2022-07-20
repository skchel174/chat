import ThemeProvider from "theme/ThemeProvider";
import SocketProvider from "ws/SocketProvider";
import Auth from "auth";
import Router from "router";

const App = () => {
  return (
    <ThemeProvider>
      <Auth>
        <SocketProvider>
          <Router/>
        </SocketProvider>
      </Auth>
    </ThemeProvider>
  );
}

export default App;
