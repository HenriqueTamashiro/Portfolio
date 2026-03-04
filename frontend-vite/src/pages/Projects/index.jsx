import { useEffect, useMemo, useState } from "react";
import Footer from "../../components/Footer";
import LoaderWrapper from "../../components/LoaderWrapper";
import { Posts } from "../../Placeholder/data.jsx";
import { Content, Holder } from "./styled";

export default function Projects({ progress }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(Posts[0]?.id ?? null);

  const activeProject = useMemo(() => {
    return (
      Posts.find((post) => post.id === activeProjectId) ?? Posts[0] ?? null
    );
  }, [activeProjectId]);

  useEffect(() => {
    progress.start();
    return () => progress.reset();
  }, [progress]);

  useEffect(() => {
    progress.register("projects-initial-render");
    progress.done("projects-initial-render");
  }, [progress]);

  useEffect(() => {
    const loaded = progress.status === "Success";
    setIsVisible(loaded);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [progress.status]);

  const isVideo = (src = "") => /\.(mp4|webm|ogg)$/i.test(src);

  const sortedPosts = [...Posts].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <LoaderWrapper progress={progress}>
      <Content className={isVisible ? "show" : "hide"}>
        <Holder>
          <section className="mainProject">
            <header>
              <h1>{activeProject?.title}</h1>
              <span>{activeProject?.created_at?.toLocaleDateString()}</span>
            </header>

            <div className="projectContent">
              <div className="tagContainer">
                {activeProject?.tags?.map((tag, index) => (
                  <img
                    key={index}
                    src={tag}
                    alt="Tecnologia"
                    className="tagIcon"
                  />
                ))}
              </div>

              <div className="mediaContainer">
                {isVideo(activeProject?.img) ? (
                  <video
                    className="videoContainer"
                    src={activeProject?.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                  />
                ) : (
                  <img
                    className="imageContainer"
                    src={activeProject?.img}
                    alt={activeProject?.title}
                  />
                )}
              </div>

              <article className="textContainer">
                <p>{activeProject?.text}</p>
              </article>
            </div>
          </section>

          <aside className="sideMenu">
            <h2>Projetos</h2>
            <div className="side-wrapper">
              <div className="projectList">
                {sortedPosts.map((post) => (
                  <button
                    key={post.id}
                    type="button"
                    className={`projectItem ${post.id === activeProject?.id ? "active" : ""}`}
                    onClick={() => setActiveProjectId(post.id)}
                  >
                    <h3>{post.title}</h3>
                    <p>{post.textPreview}</p>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </Holder>
      </Content>
      <Footer />
    </LoaderWrapper>
  );
}
