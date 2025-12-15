import { WindowLayout } from "./styled";
import { Posts } from "../../Placeholder/data2.jsx";

export default function Window({ img }) {
  return (
    <WindowLayout>
      <article className="post-about">
        <div className="about-container">
          <div className="tittle-content">
            <h1>Sobre</h1>
          </div>
          <p>
            Meu nome é Henrique Tamashiro, sou desenvolvedor FullStack com
            experiência em frontend e backend, trabalhando principalmente com
            JavaScript e TypeScript.
          </p>
          <div className="posts-wrapper">
            {Posts.map((post) => (
              <div className="content" draggable={"true"}>
                <div className="corner corner-top-left"></div>
                <div className="corner corner-top-right"></div>
                <div className="corner corner-bottom-left"></div>
                <div className="corner corner-bottom-right"></div>
                <div className="title-row">
                  <h2>{post.tittle}</h2>
                  <div className="divider" />
                </div>
                <p>{post.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="img-holder">
          <span className="bgPicture">
            <img src={img} alt="IMAGEM" />
          </span>
        </div>
      </article>
    </WindowLayout>
  );
}
