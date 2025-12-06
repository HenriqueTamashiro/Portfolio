import { WindowLayout } from "./styled";

export default function Window({ img }) {
  return (
    <WindowLayout>
      <article className="post-about">
        <div>
          <h1>Sobre</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequatur nemo quos officia amet ullam ex vitae quo consectetur
            beatae alias vel, pariatur magni deleniti fugiat eveniet dolorum,
            voluptatum similique?
          </p>
        </div>
        <div className="img-holder">
          <img src={img} alt="IMAGEM" />
        </div>
      </article>
    </WindowLayout>
  );
}
