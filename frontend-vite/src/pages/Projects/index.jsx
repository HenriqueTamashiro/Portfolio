import { Content, Holder } from "./styled";
import Footer from "../../components/Footer";
import LoaderWrapper from "../../components/LoaderWrapper";
import { Posts } from "../../Placeholder/data.jsx";

export default function Projects() {
  return (
    <LoaderWrapper>
      <Content>
        <Holder>
          <div className="post-wrapper">
            <div className="section-wrapper">
              <div className="middle-content">
                <svg viewBox="0 0 200 2000" className="middle-svg">
                  /* Esquerda */
                  <path
                    className="line"
                    d="M 80 0 L 80 70 L 60 100 L 60 150 L 40 180 L 40 2000"
                  />
                  <path
                    className="line"
                    d="M 90 0 L 90 75 L 70 105 L 70 155 L 50 185 L 50 2000"
                  />
                  <path
                    className="line"
                    d="M 100 0 L 100 80 L 80 110 L 80 160 L 60 190 L 60 2000"
                  />
                  /* Direita */
                  <path
                    className="line"
                    d="M 120 0 L 120 80 L 140 110 L 140 160 L 160 190 L 160 2000"
                  />
                  <path
                    className="line"
                    d="M 130 0 L 130 75 L 150 105 L 150 155 L 170 185 L 170 2000"
                  />
                  <path
                    className="line"
                    d="M 140 0 L 140 70 L 160 100 L 160 150 L 180 180 L 180 2000"
                  />
                </svg>
              </div>
              {Posts.map((post, index) => {
                const side = index % 2 === 0 ? "left" : "right";

                return (
                  <div key={post.id ?? index} className={`Articles ${side}`}>
                    <h1>{post.title}</h1>
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
                        />
                      ) : (
                        <img
                          className="imageContainer"
                          src={post.img}
                          alt={post.title}
                        />
                      )}
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
