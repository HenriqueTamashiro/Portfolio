import { Content, Holder, SectionView } from "./styled";
import { useEffect, useState } from "react";
import { useInView } from "../../hooks/useInView";

export default function Timeline({ progress }) {
  const [, setVisibility] = useState(false);
  const [visible, setVisible] = useInView();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index) || 0;

            setTimeout(() => {
              entry.target.classList.add("showSection");
              entry.target.classList.remove("hiddenSection");
            }, index * 100);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -1% 0px" },
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
      <SectionView ref={visible} $animate={setVisible}>
        <Holder>
          <div className="post-wrapper">
            <div className="section-wrapper">
              <div className="Item hiddenSection timeline-item">
                <h1>DESIGN RESPONSÍVEL</h1>
                <p>
                  Design responsivo e mobile-first, com foco em usabilidade,
                  adaptação progressiva de layout e componentes reutilizáveis em
                  React.
                </p>
              </div>
              <div className="Item hiddenSection timeline-item">
                <h1>PADRÕES DE ARQUITETURA</h1>
                <p>
                  Aplicação de padrões arquiteturais consolidados como
                  Client-Server, REST e MVC, com separação de responsabilidades
                  e código escalável.
                </p>
              </div>
              <div className="Item hiddenSection timeline-item">
                <h1>OTIMIZADO</h1>
                <p>
                  Aplicações otimizadas com foco em performance, controle de
                  carregamento, renderização eficiente e melhor experiência do
                  usuário.
                </p>
              </div>
              <div className="Item hiddenSection timeline-item">
                <h1>INFRAESTRUTURA</h1>
                <p>
                  Infraestrutura com Nginx como servidor e reverse proxy,
                  aplicações Node.js em ambiente Linux e deploy em cloud.
                </p>
              </div>
            </div>
          </div>
        </Holder>
      </SectionView>
    </Content>
  );
}
