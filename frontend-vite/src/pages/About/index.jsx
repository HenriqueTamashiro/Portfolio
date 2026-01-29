import { Content } from "./styled";
import LoaderWrapper from "../../components/LoaderWrapper";
import Window from "../../components/Window/index";

import profilePict from "../../assets/imgs/profilePict.png";
import Footer from "../../components/Footer";

export default function About({ progress }) {
  return (
    <LoaderWrapper>
      <Content>
        <Window img={profilePict} progress={progress} />
      </Content>
      <Footer />
    </LoaderWrapper>
  );
}
