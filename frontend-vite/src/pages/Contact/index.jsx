import { Container } from "./styled";
import LoaderWrapper from "../../components/LoaderWrapper/";
import ContactForm from "../../components/Forms/Contact/index.jsx";
import Footer from "../../components/Footer/index";

export default function Contact() {
  return (
    <LoaderWrapper>
      <Container>
        <div className="icons-contact ">
          <div className="icon">
            <i class="bi bi-telephone-fill"></i>
          </div>

          <div className="text-box">
            <h1>Telefone</h1>
            <p>(11)98485-4733</p>
          </div>

          <div className="icon">
            <i class="bi bi-envelope-at-fill"></i>
          </div>

          <div className="text-box">
            <h1>E-MAIL</h1>
            <p>tamashirodev@outlook.com</p>
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
