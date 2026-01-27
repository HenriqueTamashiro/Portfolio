import { useState, useRef, useEffect } from "react";

import { Content } from "./styled";

import TechCarousel from "../../components/Carousel";
import Hero from "../../components/Hero";
import FocusWindow from "../../components/FocusWindow";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import LoaderWrapper from "../../components/LoaderWrapper/";

import {
  Container,
  SubSector,
  SectorStyled,
  HolderContent,
  Holder,
} from "./styled";

import profilePict from "../../assets/imgs/profilePict.png";

export default function Home({ progress }) {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(null);
  const [cardId, setCardid] = useState(null);
  const cardRef = useRef({});

  const loadedCount = useRef(0);
  const TOTAL_ASSETS = 5;

  const handleAssetLoad = () => {
    loadedCount.current += 1;

    if (loadedCount.current === TOTAL_ASSETS) {
      progress.done();
    }
  };

  useEffect(() => {
    loadedCount.current = 0;

    progress.start();
    progress.register();
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
      <Container className={progress.status === "Success" ? "show" : "hide"}>
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
        <section className="hiddenSection" onReady={handleAssetLoad}>
          <Holder>
            <HolderContent>
              <Hero />
            </HolderContent>

            <HolderContent onReady={handleAssetLoad}>
              <div className="divPicture">
                <span className="lessBgPict" />
                <img
                  src={profilePict}
                  className="w-80 h-80px profilePicture"
                  onLoad={handleAssetLoad}
                />
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
          <Footer onReady={handleAssetLoad} />
        </section>
      </Container>
    </LoaderWrapper>
  );
}
