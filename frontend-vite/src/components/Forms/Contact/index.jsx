import { useEffect } from "react";
import { WindowLayout } from "./styled";

export default function ContactForm({ progress }) {
  useEffect(() => {
    progress.finish();
  }, [progress]);
  return (
    <WindowLayout>
      <form method="POST" action={""}>
        <div className="form-wrapper">
          <label htmlFor="name">
            <span className="text-label name">Nome</span>
            <input
              id="name"
              type="text"
              className="input-name"
              placeholder="Nome"
            />
          </label>
          <label htmlFor="sobrenome">
            <span className="text-label surname">Sobrenome</span>
            <input
              type="text"
              className="input-surname"
              placeholder="Sobrenome"
            />
          </label>
          <label htmlFor="surname">
            <span className="text-label email">E-mail</span>
            <input
              id="surname"
              type="text"
              className="input-email"
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="phone">
            <span className="text-label phone">Telefone</span>
            <input
              id="phone"
              type="tel"
              className="input-phone"
              placeholder="Telefone"
            />
          </label>
          <label htmlFor="message">
            <span className="text-label message">Mensagem</span>
            <textarea
              id="message"
              type="textarea"
              className="input-message"
              placeholder="Escreva sua mensagem aqui..."
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </WindowLayout>
  );
}
