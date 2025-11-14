import { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Focus, FocusArticle } from "./styled";
import SvgArticle from "../../assets/imgs/corner.svg?react";
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";

export default function FocusWindow({ onOff, post, onClose }) {
  const [load, setLoad] = useState(false);
  const windowRef = useRef(null);

  useEffect(() => {
    if (onOff) {
      const timing = setTimeout(() => {
        setLoad(true);
        windowRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
      return () => clearTimeout(timing);
    } else {
      setLoad(false);
    }
  }, [onOff]);

  if (!onOff) return null;

  return (
    <Focus ref={windowRef}>
      <div className="overlay" onClick={onClose} />
      <div className={load ? "article-active" : "article"}>
        <FocusArticle>
          <button onClick={onClose}>
            <FaWindowClose />
          </button>
          <SvgArticle className="svgCorner" />
          <div className="content">
            <h1>{post.title}</h1>
            {/\.(mp4|webm|ogg)$/i.test(post.img) ? (
              <ReactPlayer playing width="100%" height="100%" src={post.img} />
            ) : (
              <img src={post.img} alt={post.title} />
            )}
            <p>{post.text}</p>
          </div>
        </FocusArticle>
      </div>
    </Focus>
  );
}
