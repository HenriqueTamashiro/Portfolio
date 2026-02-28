import { useState, useRef, useEffect } from "react";

import { Content } from "./styled";

import TechCarousel from "../../components/Carousel";
import Hero from "../../components/Hero";
import FocusWindow from "../../components/FocusWindow";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import LoaderWrapper from "../../components/LoaderWrapper/index";
import Timeline from "../../components/Timeline/index";

import LessKey from "../../assets/imgs/lessKey.svg?react";
import GreaterKey from "../../assets/imgs/greaterKey.svg?react";

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
  const [visibility, setVisibility] = useState(false);
  const cardRef = useRef({});

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
        threshold: 0.1,
        rootMargin: "0px 0px -1% 0px",
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

  useEffect(() => {
    progress.start();
    return () => progress.reset();
  }, []);

  useEffect(() => {
    progress.register("picHome-profile");
  }, []);

  useEffect(() => {
    if (progress.status === "Success") {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    if (progress.status !== "Success") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [progress.status]);

  return (
    <LoaderWrapper progress={progress}>
      <Container className={visibility ? "show" : "hide"}>
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
              <div className="divPicture" id="profile">
                <LessKey className="lessBgPict" />
                {/* <span className="lessBgPict" /> */}
                <img
                  src={profilePict}
                  className="w-80 h-80px profilePicture"
                  onLoad={() => progress.done(`picHome-profile`)}
                  onError={() => progress.done("picHome-profile")}
                />
                <GreaterKey className="greaterBgPict" />
                {/* <span className="greaterBgPict" /> */}
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
          <Timeline progress={progress} />
          <div className="contentTittle hiddenSection timeline-item">
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
              progress={progress}
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
