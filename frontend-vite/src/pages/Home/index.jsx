import { useState, useRef } from "react";
import ReactPlayer from "react-player";

import { Container } from "../../styles/GlobalStyled";
import { Content, Articles } from "./styled";

import TechCarousel from "../../components/Carousel/index";
import Hero from "../../components/Hero/index";
import FocusWindow from "../../components/FocusWindow/index";
import {
  SubSector,
  SectorStyled,
  HolderContent,
  Holder,
} from "../../styles/SectorStyled";
import { Posts } from "../../Placeholder/data.jsx";

import SvgArticle from "../../assets/imgs/corner.svg?react";
import profilePict from "../../assets/imgs/profilePict.png";

export default function Home() {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(null);
  const [cardId, setCardid] = useState(null);
  const cardRef = useRef({});

  function handleClick(id) {
    const posts = Posts.find((post) => post.id === id);
    setContent(posts);
    setFocus(true);
    setCardid(id);
  }

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
      </div>
      <Content>
        {Posts.map((post) => (
          <Articles
            key={post.id}
            ref={(domElement) => (cardRef.current[post.id] = domElement)}
          >
            <SvgArticle className="svgCorner" />
            <div className="cards">
              <div className="article-tittle">
                <h1>{post.title}</h1>
              </div>
              <div className="media-container">
                {/\.(mp4|webm|ogg)$/i.test(post.img) ? (
                  <video
                    src={post.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    onClick={() => handleClick(post.id)}
                  ></video>
                ) : (
                  <img
                    src={post.img}
                    alt={post.title}
                    onClick={() => handleClick(post.id)}
                  />
                )}
              </div>

              <div className="article-content">
                <p>{post.textPreview}</p>
              </div>
              <div className="buttonContainer">
                <button
                  onClick={() => handleClick(post.id)}
                  className="bottom outline"
                >
                  Veja mais
                </button>
              </div>
            </div>
          </Articles>
        ))}
      </Content>

      {/* Footer */}
      <footer></footer>
    </Container>
  );
}
