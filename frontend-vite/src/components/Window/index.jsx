import { WindowLayout } from "./styled";

export default function Window({ img }) {
  return (
    <WindowLayout>
      <article className="post-about">
        <div className="about-container">
          <div className="tittle-content">
            <h1>Sobre</h1>
          </div>

          <div className="content">
            <p></p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequatur nemo quos officia amet ullam ex vitae quo consectetur
              beatae alias vel, pariatur magni deleniti fugiat eveniet dolorum,
              voluptatum similique?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequatur nemo quos officia amet ullam ex vitae quo consectetur
              beatae alias vel, pariatur magni deleniti fugiat eveniet dolorum,
              voluptatum similique?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequatur nemo quos officia amet ullam ex vitae quo consectetur
              beatae alias vel, pariatur magni deleniti fugiat eveniet dolorum,
              voluptatum similique?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequatur nemo quos officia amet ullam ex vitae quo consectetur
              beatae alias vel, pariatur magni deleniti fugiat eveniet dolorum,
              voluptatum similique?
            </p>
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
