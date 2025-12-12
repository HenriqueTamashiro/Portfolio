import { WindowLayout } from "./styled.jsx";
import { Posts } from "../../Placeholder/data.jsx";

export default function Window({ img }) {
  return (
    <WindowLayout>
      <article className="post-about">
        <div className="about-container">
          <div className="tittle-content">
            <h1>Sobre</h1>
          </div>

          <div className="content">
            <p>
              Meu nome é Henrique Tamashiro, sou desenvolvedor Full Stack com
              experiência em frontend e backend, trabalhando principalmente com
              JavaScript e TypeScript.
            </p>
            <h2> Frontend</h2>
            <p>
              Desenvolvendo interfaces responsivas e escaláveis. Utilizando
              React.js e bibliotecas como o Lodash, Styled Components, React
              Router, TailWind e Bootstrap.
            </p>
            <h2> Backend</h2>
            <p>
              Criação de APIs REST em Node.js com Express.js, estruturando rotas
              e middlewares. Para autenticação e segurança, utilizo o JWT,
              Express-Session, bcrypt.js, Helmet e CORS.
            </p>
            <h2> Banco de Dados</h2>
            <p>
              Criando CRUDs em MySQL, MongoDB e MariaDB juntamente de Sequelize
              para facilitar a manipulação de dados.
            </p>
            <h2>Infraestrutura</h2>
            <p>
              Realizando deploys em ambientes em nuvens como AWS e GCP com NGINX
              em servidores em LINUX(Ubuntu), gerenciando domínios e
              configurando variáveis via .env.
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
