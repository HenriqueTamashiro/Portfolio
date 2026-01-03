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
