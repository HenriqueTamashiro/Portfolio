import { useState, useRef, useEffect, useContext } from "react";

import { Content } from "./styled";

import TechCarousel from "../../components/Carousel";
import Hero from "../../components/Hero";
import FocusWindow from "../../components/FocusWindow";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import LoaderWrapper from "../../components/LoaderWrapper";

import {
  Container,
  SubSector,
  SectorStyled,
  HolderContent,
  Holder,
} from "./styled";

import profilePict from "../../assets/imgs/profilePict.png";
import LoadingContext from "../../layout/Loading/LoadingContext";

export default function Home() {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(null);
  const [cardId, setCardid] = useState(null);
  const cardRef = useRef({});

  const progress = useContext(LoadingContext);

  useEffect(() => {
    progress.register(3);
  }, [progress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("showSection");
            entry.target.classList.remove("hiddenSection");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((sec, index) => {
      sec.classList.add("baseSection");
      if (index !== 0) sec.classList.add("hiddenSection");
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LoaderWrapper>
      <Container className="show">
        <FocusWindow
          onOff={focus}
          post={content}
          onClose={() => {
            setFocus(false);
            cardRef.current[cardId]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        />

        {/* HERO */}
        <section className="hiddenSection">
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

            <SectorStyled>
              <SubSector>
                <TechCarousel />
              </SubSector>
            </SectorStyled>
          </Holder>
        </section>

        {/* PROJETOS */}
        <section className="hiddenSection">
          <div className="contentTittle">
            Projetos
            <div className="divider" />
            <h5>Recentes</h5>
          </div>

          <Content>
            <Cards
              setContent={setContent}
              setFocus={setFocus}
              setCardid={setCardid}
              cardRef={cardRef}
              onLoad={progress.done}
            />
          </Content>
        </section>

        {/* FOOTER */}
        <section className="hiddenSection">
          <Footer />
        </section>
      </Container>
    </LoaderWrapper>
  );
}
