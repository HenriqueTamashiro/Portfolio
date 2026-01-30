import { Content } from "./styled";
import LoaderWrapper from "../../components/LoaderWrapper";
import Window from "../../components/Window/index";

import profilePict from "../../assets/imgs/profilePict.png";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

export default function About({ progress }) {
  const [visibility, setVisibility] = useState(false);

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
      // garante limpeza ao sair da página
      document.body.style.overflow = "auto";
    };
  }, [progress.status]);
  return (
    <LoaderWrapper progress={progress}>
      <Content className={visibility ? "show" : "hide"}>
        <Window img={profilePict} progress={progress} />
      </Content>
      <Footer />
    </LoaderWrapper>
  );
}
