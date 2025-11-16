import { useState, useRef } from "react";

import { Container } from "../../styles/GlobalStyled";
import { Content } from "./styled";

import TechCarousel from "../../components/Carousel/index";
import Hero from "../../components/Hero/index";
import FocusWindow from "../../components/FocusWindow/index";
import Cards from "../../components/Cards";

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
      </Holder>

      {/* Carousel */}
      <SectorStyled>
        <SubSector>
          <TechCarousel />
        </SubSector>
      </SectorStyled>

      {/* Conteúdo */}
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

      {/* Footer */}
      <footer></footer>
    </Container>
  );
}
