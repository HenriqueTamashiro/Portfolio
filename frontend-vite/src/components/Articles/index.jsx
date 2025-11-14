import { ArticleStyle } from "./styled.jsx";
import { useState, useRef } from "react";
import { Posts } from "../../Placeholder/data.jsx";
import FocusWindow from "../FocusWindow/index.jsx";
import SvgArticle from "../../assets/imgs/corner.svg?react";

export default function Articles() {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(null);
  const [cardId, setCardid] = useState(null);
  const cardRef = useRef({});

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
  />;

  function handleClick(id) {
    const posts = Posts.find((post) => post.id === id);
    setContent(posts);
    setFocus(true);
    setCardid(id);
  }
  return (
    <ArticleStyle>
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
            <div className="image">
              <img src={post.img} onClick={() => handleClick(post.id)} />
            </div>
            <div className="article-content">
              <p>{post.text}</p>
            </div>
          </div>
        </Articles>
      ))}
    </ArticleStyle>
  );
}
