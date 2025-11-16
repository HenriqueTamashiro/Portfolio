import { StyledCards, Articles } from "./styled";
import { Posts } from "../../Placeholder/data.jsx";

import SvgArticle from "../../assets/imgs/corner.svg?react";

export default function Cards({ setContent, setFocus, setCardid, cardRef }) {
  function handleClick(id) {
    const posts = Posts.find((post) => post.id === id);
    setContent(posts);
    setFocus(true);
    setCardid(id);
  }
  return (
    <StyledCards>
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
            <div className="tag container">
              <div className="tags">
                {post.tags.map((tag, i) => (
                  <i key={i} src={tag} alt="icon" />
                ))}
              </div>
            </div>
            <div className="postedContainer">
              <div className="posted">10/05/2025</div>
            </div>
            <div className="article-content">
              <p>{post.textPreview}</p>
            </div>

            <div className="buttonContainer">
              <span className="tab">
                <i className="bi bi-github"></i>
                <span className="label">Github</span>
              </span>
              <button
                onClick={() => handleClick(post.id)}
                className="buttn outline"
              >
                Veja mais
              </button>
            </div>
          </div>
        </Articles>
      ))}
    </StyledCards>
  );
}
