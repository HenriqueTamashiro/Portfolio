import ReactLogo from "../../assets/imgs/React-icon.svg?react";
import NodeLogo from "../../assets/imgs/svgNode.svg?react";
import MysqlLogo from "../../assets/imgs/mysql-svgrepo.svg?react";
import Sequelize from "../../assets/imgs/sequelize-svgrepo.svg?react";
import Tailwind from "../../assets/imgs/tailwind-svgrepo.svg?react";
import Express from "../../assets/imgs/express-svgrepo.svg?react";
import { TechGridStyle } from "./styled";

export default function TechGrid() {
  const technologies = [
    { name: "React", icon: <ReactLogo className="tech-icon" /> },
    { name: "Node.js", icon: <NodeLogo className="tech-icon" /> },
    { name: "Express.js", icon: <Express className="tech-icon" /> },
    { name: "MySQL", icon: <MysqlLogo className="tech-icon" /> },
    { name: "Sequelize", icon: <Sequelize className="tech-icon" /> },
    { name: "TailWind", icon: <Tailwind className="tech-icon" /> },
    { name: "JavaScript", icon: <i className="bi bi-javascript"></i> },
    { name: "Bootstrap", icon: <i className="bi bi-bootstrap-fill"></i> },
  ];

  return (
    <TechGridStyle>
      <div className="grid-header">
        <h1>Tecnologias</h1>
      </div>
      
      <div className="tech-grid-container">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="icon-wrapper">{tech.icon}</div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </TechGridStyle>
  );
}
