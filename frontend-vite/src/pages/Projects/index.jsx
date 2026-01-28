import { Content, Holder, MiddleContent, CircuitWrapper } from "./styled";
import Footer from "../../components/Footer";
import LoaderWrapper from "../../components/LoaderWrapper";
import CircuitSVG from "../../components/subcomponents/CircuitSVG/CircuitV2.jsx";
import * as Pattern from "../../components/subcomponents/CircuitSVG/Patterns/index.jsx";

import { Posts } from "../../Placeholder/data.jsx";
import { useEffect, useRef } from "react";
import useLoader from "../../layout/loading/LoadingContext.jsx";

export default function Projects() {
  const registeredRef = useRef(false);
  const progress = useLoader();

  useEffect(() => {
    if (registeredRef.current) return;
    registeredRef.current = true;

    progress.register(Posts.length, "Projects.media");
  }, []);

  return (
    <LoaderWrapper>
      <Content>
        <Holder>
          <div className="post-wrapper">
            <div className="section-wrapper">
              <MiddleContent>
                <CircuitWrapper>
                  <span className="tittle-circuit">
                    <h1>Projetos</h1>
                  </span>
                  <div className="tech-wrapper">
                    <div className="tech tech-corner-top-right"></div>
                    <div className="tech tech-corner-bottom-right"></div>
                    <div className="tech2 tech2-corner-bottom-left"></div>
                    <div className="tech2 tech2-corner-top-left"></div>
                  </div>
                  <CircuitSVG pattern={Pattern.Circuit1} />
                </CircuitWrapper>
              </MiddleContent>

              {Posts.map((post, index) => {
                const side = index % 2 === 0 ? "left" : "right";

                return (
                  <div key={post.id ?? index} className={`Articles ${side}`}>
                    <h1>{post.title}</h1>
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
                          onCanPlayThrough={progress.done}
                          onError={progress.done}
                        />
                      ) : (
                        <img
                          className="imageContainer"
                          src={post.img}
                          alt={post.title}
                          onLoad={() => progress.done(`img:${post.id}`)}
                          onError={() => progress.done(`img-error:${post.id}`)}
                        />
                      )}
                    </div>

                    <div className="postedContainer">
                      <div className="posted" alt="Data">
                        {post.created_at?.toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-container">
                      <p>{post.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Holder>
      </Content>
      <Footer />
    </LoaderWrapper>
  );
}
