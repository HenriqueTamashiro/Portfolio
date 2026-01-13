import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import PageWrapper from "../components/LoaderWrapper";

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas*/}
      <Route
        path="/"
        element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
