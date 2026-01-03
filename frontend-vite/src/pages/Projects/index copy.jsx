import { Content, Holder } from "./styled";
import LoaderWrapper from "../../components/LoaderWrapper";
import { Posts } from "../../Placeholder/data.jsx";

export default function Projects() {
  return (
    <LoaderWrapper>
      <Content>
        <Holder>
          <div className="corner corner-top-left"></div>
          <div className="corner corner-top-right"></div>
          <div className="corner corner-bottom-left"></div>
          <div className="corner corner-bottom-right"></div>
          <div className="post-wrapper">
            <div className="section-wrapper">
              {Posts.map((post) => (
                <div className="Articles">
                  <h1>{post.title}</h1>
                  {/\.(mp4|webm|ogg)$/i.test(post.img) ? (
                    <video
                      className="videoContainer"
                      src={post.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                    ></video>
                  ) : (
                    <img
                      className="imageContainer"
                      src={post.img}
                      alt={post.title}
                    />
                  )}
                  <p>{post.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Holder>
      </Content>
    </LoaderWrapper>
  );
}
