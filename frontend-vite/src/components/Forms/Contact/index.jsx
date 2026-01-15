import { WindowLayout } from "./styled";

export default function ContactForm() {
  return (
    <WindowLayout>
      <form>
        <div className="form-wrapper">
          <label>
            <span className="text-label name"> Nome</span>
            <input type="text" className="input-name" placeholder="Nome" />
          </label>
          <label>
            <span className="text-label surname"> Sobrenome</span>
            <input
              type="text"
              className="input-surname"
              placeholder="Sobrenome"
            />
          </label>
          <label>
            <span className="text-label email"> E-mail</span>
            <input type="text" className="input-email" placeholder="E-mail" />
          </label>
          <label>
            <span className="text-label phone"> Telefone</span>
            <input type="tel" className="input-phone" placeholder="Telefone" />
          </label>
          <label>
            <span className="text-label message"> Mensagem</span>
            <textarea
              type="textarea"
              className="input-message"
              placeholder="Mensagem"
            />
          </label>
        </div>
        <button>Enviar</button>
      </form>
    </WindowLayout>
  );
}
