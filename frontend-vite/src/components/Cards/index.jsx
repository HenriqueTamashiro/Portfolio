import { StyledCards, Articles } from "./styled";
import { Posts } from "../../Placeholder/data.jsx";
import { useEffect } from "react";

export default function Cards({
  setContent,
  setFocus,
  setCardid,
  cardRef,
  progress,
}) {
  const sortedPosts = [...Posts].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const slicedPosts = sortedPosts.slice(0, 3);

  function handleClick(id) {
    const posts = Posts.find((post) => post.id === id);
    setContent(posts);
    setFocus(true);
    setCardid(id);
  }

  useEffect(() => {
    progress.start();
    return () => {
      progress.reset();
    };
  }, []);

  useEffect(() => {
    slicedPosts.forEach((post) => {
      progress.register(`media-${post.id}`);
    });
  }, []);

  return (
    <StyledCards>
      {slicedPosts.map((post) => (
        <Articles
          key={post.id}
          ref={(domElement) => (cardRef.current[post.id] = domElement)}
        >
          <div className="cards">
            <div className="article-tittle">
              <h1>{post.title}</h1>
            </div>

            <div className="tagContainer">
              {post.tags.map((tag, i) => (
                <img key={i} src={tag} alt="icon" className="tagIcon" />
              ))}
            </div>
            <div className="mediaContainer">
              {/\.(mp4|webm|ogg)$/i.test(post.img) ? (
                <video
                  className="videoContainer"
                  src={post.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  onClick={() => handleClick(post.id)}
                  onCanPlayThrough={() => progress.done(`media-${post.id}`)}
                  onError={() => progress.done(`media-${post.id}`)}
                ></video>
              ) : (
                <img
                  className="imageContainer"
                  src={post.img}
                  alt={post.title}
                  onClick={() => handleClick(post.id)}
                  onLoad={() => progress.done(`media-${post.id}`)}
                  onError={() => progress.done(`media-${post.id}`)}
                />
              )}
            </div>
            <div className="postedContainer">
              <div className="posted" alt="Data">
                {post.created_at?.toLocaleDateString()}
              </div>
            </div>

            <div className="article-content">
              <p>{post.textPreview}</p>
            </div>

            <div className="buttonContainer">
              {post.link ? (
                <a
                  href={post.link}
                  className="tab"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                  <span className="label">Github</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="tab tab-disabled"
                  disabled
                  aria-label="Link do Github indisponível"
                >
                  <i className="bi bi-github"></i>
                  <span className="label">Github</span>
                </button>
              )}
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
