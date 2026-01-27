import { Content } from "./styled";
import LoaderWrapper from "../../components/LoaderWrapper";
import Window from "../../components/Window/index";

import profilePict from "../../assets/imgs/profilePict.png";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default function About({ progress }) {
  useEffect(() => {
    progress.finish();
  }, [progress]);

  return (
    <LoaderWrapper>
      <Content>
        <Window img={profilePict} progress={progress} />
      </Content>
      <Footer />
    </LoaderWrapper>
  );
}
