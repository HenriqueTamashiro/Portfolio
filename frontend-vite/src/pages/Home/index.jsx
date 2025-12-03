import { useState, useRef, useEffect } from "react";

import { Container } from "../../styles/GlobalStyled";
import { Content } from "./styled";

import TechCarousel from "../../components/Carousel/index";
import Hero from "../../components/Hero/index";
import FocusWindow from "../../components/FocusWindow/index";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

import {
  SubSector,
  SectorStyled,
  HolderContent,
  Holder,
} from "../../styles/SectorStyled";

import profilePict from "../../assets/imgs/profilePict.png";

export default function Home() {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(null);
  const [cardId, setCardid] = useState(null);
  const cardRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (eventScroll) => {
        eventScroll.forEach((scrolled) => {
          if (scrolled.isIntersecting) {
            scrolled.target.classList.add("showSection");
            scrolled.target.classList.remove("hiddenSection");

            observer.unobserve(scrolled.target);
          }
        });
      },

      {
        threshold: 0.15, // 15% visível => ativa
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((sec, index) => {
      sec.classList.add("baseSection");

      if (index !== 0) {
        sec.classList.add("hiddenSection");
      }

      observer.observe(sec);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <FocusWindow
        onOff={focus}
        post={content}
        onClose={() => {
          setFocus(false);
          const element = cardRef.current[cardId];
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
      />
      <section className="baseSection">
        {/* Hero */}

        <Holder>
          <HolderContent>
            <Hero />
          </HolderContent>
          <HolderContent>
            <div className="divPicture">
              <span className="lessBgPict" />
              <img src={profilePict} className="w-80 h-80px profilePicture" />
              <span className="greaterBgPict" />
            </div>
          </HolderContent>

          {/* Carousel */}
          <SectorStyled>
            <SubSector>
              <TechCarousel />
            </SubSector>
          </SectorStyled>
        </Holder>
      </section>

      {/* Conteúdo */}
      <section className="hiddenSection">
        <div className="contentTittle">
          <h1>Projetos</h1>
          <div className="line">
            <svg width="100" height="100">
              <path d="M0 0 L70 1" stroke="#76a1ff" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <Content>
          <Cards
            setContent={setContent}
            setFocus={setFocus}
            setCardid={setCardid}
            cardRef={cardRef}
          />
        </Content>
      </section>

      {/* Footer */}
      <section className="hiddenSection">
        <Footer />
      </section>
    </Container>
  );
}
