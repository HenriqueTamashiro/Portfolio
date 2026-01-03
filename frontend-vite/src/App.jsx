import { BrowserRouter } from "react-router-dom";
import "./styles/Tailwind/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AppRoutes from "./routes";
import ProgressBar from "./components/ScrollTracker/ProgressBar";
import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ProgressBar />
      <AppRoutes />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
