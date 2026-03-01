import { Content, Holder, Corner, MidSVG, SectionView } from "./styled";

import { useEffect, useState } from "react";

import MidFragment from "../../assets/imgs/mid-circuit.svg?react";
import TechPolygon from "../../assets/imgs/tech-polygon.svg?react";
import TechFragment1 from "../../assets/imgs/tech-fragment1.svg?react";
import TechFragment2 from "../../assets/imgs/tech-fragment2.svg?react";
import TechFragment3 from "../../assets/imgs/tech-fragment3.svg?react";
import MobileIcon from "../../assets/imgs/mob.svg?react";
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
            }, index * 50);

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
        <div className="tech-wheel">
          <TechFragment1 className="tech-fragment1 wheel" />
          <TechFragment2 className="tech-fragment2 wheel" />
          <TechFragment3 className="tech-fragment3 wheel" />
        </div>
        <div className="tech-polygon">
          <TechPolygon className="tech-polygon1 poly" />
          <TechPolygon className="tech-polygon2 poly" />
          <TechPolygon className="tech-polygon3 poly" />
          <TechPolygon className="tech-polygon4 poly" />
          <TechPolygon className="tech-polygon5 poly" />
          <TechPolygon className="tech-polygon6 poly" />
        </div>
        <Holder>
          <div className="post-wrapper">
            <div className="section-wrapper">
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

                <MobileIcon className="mobile-icon" stroke="#000" />
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
                  Client-Server, REST e MVC, com separação de responsabilidades
                  e código escalável.
                </p>
                <i className="bi bi-stack-overflow"></i>
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
                <i class="bi bi-fast-forward"></i>
              </div>
              <div className="Item right hiddenSection timeline-item">
                <div className="background-fragment right" />

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
                <i class="bi bi-gear-wide gear1"></i>
                <i class="bi bi-gear-wide gear2"></i>
              </div>

              <div className="gap-timeline">
                <MidSVG viewBox="0 0 50 555">
                  <MidFragment className="fragment" />
                </MidSVG>
              </div>
            </div>
          </div>
        </Holder>
      </SectionView>
    </Content>
  );
}
