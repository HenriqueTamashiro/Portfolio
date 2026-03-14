import { useEffect, useState } from "react";
import LoaderWrapper from "../../components/LoaderWrapper";
import ContactForm from "../../components/Forms/Contact";
import Footer from "../../components/Footer";
import { Container } from "./styled";

export default function Contact({ progress }) {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    progress.start();
    return () => progress.reset();
  }, []);

  useEffect(() => {
    progress.register("icons-div", "form-div");

    requestAnimationFrame(() => {
      progress.done("icons-div");
      progress.done("form-div");
    });
  }, []);

  useEffect(() => {
    if (progress.status === "Success") {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    if (progress.status !== "Success") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // garante limpeza ao sair da página
      document.body.style.overflow = "auto";
    };
  }, [progress.status]);

  return (
    <LoaderWrapper progress={progress}>
      <Container className={visibility ? "show" : "hide"}>
        <div className="icons-contact ">
          <div className="contact-item">
            <div className="icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="text-box">
              <h1>Telefone</h1>
              <p>(11) 98485-4733</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <i className="bi bi-envelope-at-fill"></i>
            </div>
            <div className="text-box">
              <h1>E-MAIL</h1>
              <p>tamashirodev@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="gap-contact"></div>
        <div className="form-contact">
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </LoaderWrapper>
  );
}
