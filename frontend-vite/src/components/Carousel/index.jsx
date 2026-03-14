import ReactLogo from "../../assets/imgs/React-icon.svg?react";
import NodeLogo from "../../assets/imgs/svgNode.svg?react";
import MysqlLogo from "../../assets/imgs/mysql-svgrepo.svg?react";
import Sequelize from "../../assets/imgs/sequelize-svgrepo.svg?react";
import Tailwind from "../../assets/imgs/tailwind-svgrepo.svg?react";
import Express from "../../assets/imgs/express-svgrepo.svg?react";
import { TechTableStyle } from "./styled";

export default function TechCarousel() {
  const technologies = [
    { name: "React", icon: <ReactLogo className="tech-icon" />, category: "Frontend" },
    { name: "Node.js", icon: <NodeLogo className="tech-icon" />, category: "Backend" },
    { name: "Express.js", icon: <Express className="tech-icon" />, category: "Backend" },
    { name: "MySQL", icon: <MysqlLogo className="tech-icon" />, category: "Database" },
    { name: "Sequelize", icon: <Sequelize className="tech-icon" />, category: "ORM" },
    { name: "TailWind", icon: <Tailwind className="tech-icon" />, category: "Frontend" },
    { name: "JavaScript", icon: <i className="bi bi-javascript"></i>, category: "Language" },
    { name: "Bootstrap", icon: <i className="bi bi-bootstrap-fill"></i>, category: "Frontend" },
    { name: "Git", icon: <i className="bi bi-git"></i>, category: "Tools" },
  ];

  return (
    <TechTableStyle>
      <div className="table-header">
        <h1>Tecnologias</h1>
        <p>Ferramentas e tecnologias que utilizo no desenvolvimento</p>
      </div>
      
      <div className="table-wrapper">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Tecnologia</th>
              <th>Categoria</th>
              <th>Ícone</th>
            </tr>
          </thead>
          <tbody>
            {technologies.map((tech, index) => (
              <tr key={index} className="tech-row">
                <td className="tech-name">{tech.name}</td>
                <td className="tech-category">{tech.category}</td>
                <td className="tech-icon-cell">{tech.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TechTableStyle>
  );
}
