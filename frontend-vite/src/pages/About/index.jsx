import { Container } from "../../styles/GlobalStyled";
import { Content } from "./styled";
import TechCarousel from "../../components/Carousel/index";
import Hero from "../../components/Hero/index";

import {
  SubSector,
  SectorStyled,
  HolderContent,
  Holder,
} from "../../styles/SectorStyled";

import profilePict from "../../assets/imgs/profilePict.png";

export default function Home() {
  return (
    <Container>
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

      {/* Separador */}
      <SectorStyled>
        <SubSector>
          <TechCarousel />
        </SubSector>
      </SectorStyled>

      {/* Conteúdo */}
      <Content></Content>

      {/* Footer */}
      <footer></footer>
    </Container>
  );
}
