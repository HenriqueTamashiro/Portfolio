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
                <svg viewBox="0 0 120 2000" className="middle-svg">
                  <path className="line" d="M 20 0 L 20 100 L5 120 L5 200 " />
                  <path className="line" d="M 30 0 L 30 2000" />
                  <path className="line" d="M 40 0 L 40 2000" />
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
