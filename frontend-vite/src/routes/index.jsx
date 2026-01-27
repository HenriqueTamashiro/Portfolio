import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import PageWrapper from "../components/LoaderWrapper";

import AppLayout from "../Layout/Loading/index";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas*/}
      <Route
        path="/"
        element={
          <AppLayout>{(progress) => <Home progress={progress} />}</AppLayout>
        }
      />
      <Route
        path="/about"
        element={
          <AppLayout>{(progress) => <About progress={progress} />}</AppLayout>
        }
      />
      <Route
        path="/projects"
        element={
          <AppLayout>
            {(progress) => <Projects progress={progress} />}
          </AppLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <AppLayout>{(progress) => <Contact progress={progress} />}</AppLayout>
        }
      />
    </Routes>
  );
}
