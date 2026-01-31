import { WindowLayout } from "./styled";
import { Posts } from "../../Placeholder/data2.jsx";
import { useEffect } from "react";

export default function Window({ img, progress }) {
  useEffect(() => {
    progress.register("post-about-render", "post-about-image");

    requestAnimationFrame(() => {
      progress.done("post-about-render");
    });
  }, []);
  return (
    <WindowLayout>
      <article className="post-about">
        <div className="img-holder">
          <span className="bgPicture">
            <img
              src={img}
              alt="IMAGEM"
              onLoad={() => progress.done("post-about-image")}
              onError={() => progress.done("post-about-image")}
            />
          </span>
        </div>
        <div className="about-container">
          {/* <div className="corner corner-top-left"></div>
            <div className="corner corner-top-right"></div>
            <div className="corner corner-bottom-left"></div>
            <div className="corner corner-bottom-right"></div> */}
          <div className="posts-wrapper">
            <div className="content-container">
              <div className="presentation">
                Meu nome é Henrique Tamashiro, sou desenvolvedor FullStack com
                experiência em frontend e backend, trabalhando principalmente
                com JavaScript e TypeScript.
              </div>
              {Posts.map((post) => (
                <div className="content">
                  <div className="title-row">
                    <div className="corner corner-top-left" />
                    {post.tittle}
                    <div className="corner corner-bottom-right" />
                  </div>
                  <p>{post.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </WindowLayout>
  );
}
