import ExpressIcon from "../../assets/imgs/express-svgrepo.svg?react";
import NodeIcon from "../../assets/imgs/iconSizeNode.svg?react";
import MysqlIcon from "../../assets/imgs/mysql-svgrepo.svg?react";
import ReduxIcon from "../../assets/imgs/reduxSVG.svg?react";
import AxiosIcon from "../../assets/imgs/axiosSVG.svg?react";

const iconMap = {
  express: ExpressIcon,
  node: NodeIcon,
  mysql: MysqlIcon,
  redux: ReduxIcon,
  axios: AxiosIcon,
};

export default function ProjectTagIcon({ tag, className = "tagIcon" }) {
  const Icon = iconMap[tag];

  if (!Icon) return null;

  return <Icon className={className} aria-label={tag} role="img" />;
}
