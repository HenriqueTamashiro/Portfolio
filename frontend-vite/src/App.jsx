import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, themeTeste } from "./styles/themes";

import "./styles/Tailwind/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AppRoutes from "./routes";
import ProgressBar from "./components/ScrollTracker/ProgressBar";
import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/Header";
import { ProgressProvider } from "./layout/Loading/ProgressContext";

function App() {
  const isDark = true;

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDark ? themeTeste : lightTheme}>
        {/* Scroll progress — independente */}
        <ProgressBar />

        {/* Loading de navegação */}
        <ProgressProvider>
          <Header />
          <AppRoutes />
        </ProgressProvider>

        <GlobalStyled />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
