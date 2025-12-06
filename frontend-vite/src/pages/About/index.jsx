import { Content } from "./styled";
import LoaderWrapper from "../../components/LoaderWrapper";
import Window from "../../components/Window/index";

import profilePict from "../../assets/imgs/profilePict.png";

export default function About() {
  return (
    <LoaderWrapper>
      <Content>
        <Window img={profilePict} />
      </Content>
    </LoaderWrapper>
  );
}
