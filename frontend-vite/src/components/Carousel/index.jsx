import { useEffect } from "react";
import { CarouselStyle } from "./styled";
import addAnimation from "../../scripts/effects/carousel";
import ReactLogo from "../../assets/imgs/React-icon.svg?react";
import NodeLogo from "../../assets/imgs/svgNode.svg?react";
import MysqlLogo from "../../assets/imgs/mysql-svgrepo.svg?react";
import Sequelize from "../../assets/imgs/sequelize-svgrepo.svg?react";
import Tailwind from "../../assets/imgs/tailwind-svgrepo.svg?react";
import Express from "../../assets/imgs/express-svgrepo.svg?react";

export default function TechCarousel() {
  useEffect(() => {
    addAnimation();
  }, []);
  return (
    <CarouselStyle>
      <div className="title-row ">
        <h1 class="tittle-carousel">Tecnologias</h1>
      </div>
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="inner_scroller ">
          <div className="icon-item">
            <Express className="express-icon " />
            <p>Express.js</p>
          </div>
          <div className="icon-item">
            <Tailwind className="tailwind-icon " />
            <p>TailWind</p>
          </div>

          <div className="icon-item">
            <Sequelize className="sequelize-icon " />
            <p>Squelize</p>
          </div>

          <div className="icon-item">
            <MysqlLogo className="mysql-icon " />
            <p>MySQL</p>
          </div>

          <div className="icon-item">
            <i className="bi bi-javascript text-7xl "></i>
            <p>JavaScript</p>
          </div>

          <div className="icon-item">
            <NodeLogo className="node-icon " />
            <p>Node.js</p>
          </div>

          <div className="icon-item">
            <ReactLogo className="  react-icon " />
            <p>React</p>
          </div>

          <div className="icon-item git">
            <i className="bi bi-git text-7xl "></i>
            <p>Git</p>
          </div>

          <div className="icon-item">
            <i className="bi bi-bootstrap-fill text-7xl "></i>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </CarouselStyle>
  );
}
