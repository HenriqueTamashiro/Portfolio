import { Content, Holder, Corner } from "./styled";

import { useEffect, useState } from "react";

export default function Timeline({ progress }) {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index) || 0;

            setTimeout(() => {
              entry.target.classList.add("showSection");
              entry.target.classList.remove("hiddenSection");
            }, index * 50);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      item.dataset.index = index;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (progress.status === "Success") {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [progress.status]);

  return (
    <Content>
      <Holder>
        <div className="post-wrapper">
          <div className="section-wrapper">
            <div className="Item left showSection timeline-item">
              <div className="background-fragment right" />
              <div className="background-fragment2 left" />
              <div className="tittle-item">
                <Corner
                  className="top-left"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
                <h1>DESIGN RESPONSÍVEL</h1>
                <Corner
                  className="top-right"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
              </div>

              <p>
                Design responsivo e mobile-first, com foco em usabilidade,
                adaptação progressiva de layout e componentes reutilizáveis em
                React.
              </p>
            </div>
            <div className="Item right showSection timeline-item">
              <div className="background-fragment right" />
              <div className="background-fragment2 left" />
              <div className="tittle-item">
                <Corner
                  className="top-left"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
                <h1>PADRÕES DE ARQUITETURA</h1>
                <Corner
                  className="top-right"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
              </div>
              <p>
                Aplicação de padrões arquiteturais consolidados como
                Client-Server, REST e MVC, com separação de responsabilidades e
                código escalável.
              </p>
            </div>
            <div className="Item left hiddenSection timeline-item">
              <div className="background-fragment right" />
              <div className="background-fragment2 left" />
              <div className="tittle-item">
                <Corner
                  className="top-left"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
                <h1>OTIMIZADO</h1>
                <Corner
                  className="top-right"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
              </div>
              <p>
                Aplicações otimizadas com foco em performance, controle de
                carregamento, renderização eficiente e melhor experiência do
                usuário.
              </p>
            </div>
            <div className="Item right hiddenSection timeline-item">
              <div className="background-fragment right" />
              <div className="background-fragment2 left" />
              <div className="tittle-item">
                <Corner
                  className="top-left"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
                <h1>INFRAESTRUTURA</h1>
                <Corner
                  className="top-right"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M0 16 6.82 5.088A10.83 10.83 0 0 1 16 0v16z" />
                </Corner>
              </div>
              <p>
                Infraestrutura com Nginx como servidor e reverse proxy,
                aplicações Node.js em ambiente Linux e deploy em cloud.
              </p>
            </div>

            <div className="gap-timeline"></div>
          </div>
        </div>
      </Holder>
    </Content>
  );
}
