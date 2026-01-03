import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import "./styles/Tailwind/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AppRoutes from "./routes";
import ProgressBar from "./components/ScrollTracker/ProgressBar";
import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/Header";

function App() {
  const isDark = true;

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Header />
        <ProgressBar />
        <AppRoutes />
        <GlobalStyled />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
