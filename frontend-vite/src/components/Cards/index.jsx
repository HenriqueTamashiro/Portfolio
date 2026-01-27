import { StyledCards, Articles } from "./styled";
import { Posts } from "../../Placeholder/data.jsx";

export default function Cards({
  setContent,
  setFocus,
  setCardid,
  cardRef,
  onLoad,
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
                  onLoadedData={onLoad}
                ></video>
              ) : (
                <img
                  className="imageContainer"
                  src={post.img}
                  alt={post.title}
                  onClick={() => handleClick(post.id)}
                  onLoad={onLoad}
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
