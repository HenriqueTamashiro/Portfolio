import { useEffect } from "react";
import LoadingContext from "../../layout/Loading/LoadingContext";
import LoaderWrapper from "../../components/LoaderWrapper";
import ContactForm from "../../components/Forms/Contact";
import Footer from "../../components/Footer";
import { Container } from "./styled";

export default function Contact({ progress }) {
  useEffect(() => {
    progress.start();
    return () => progress.reset();
  }, []);

  useEffect(() => {
    progress.register("", "");
  }, []);

  return (
    <LoaderWrapper>
      <div className={progress.status === "Success" ? "show" : "hide"}>
        <Container>
          <div className="icons-contact ">
            <div className="icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="text-box">
              <h1>Telefone</h1>
              <p>(11) 98485-4733</p>
            </div>
            <div className="icon">
              <i className="bi bi-envelope-at-fill"></i>
            </div>
            <div className="text-box">
              <h1>E-MAIL</h1>
              <p>tamashirodev@outlook.com</p>
            </div>
          </div>
          <div className="gap-contact"></div>
          <div className="form-contact">
            <ContactForm
              progress={() => {
                progress.done("");
              }}
            />
          </div>
        </Container>
      </div>
      <Footer />
    </LoaderWrapper>
  );
}
