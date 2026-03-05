import ImgTeste from "../assets/imgs/image.png";
import Confidence from "../assets/imgs/Confidence.png";
import {
  agendaVideo,
  apiVideo,
  expressIcon,
  nodeIcon,
  mysqlIcon,
  reduxIcon,
  axiosIcon,
} from "../assets/Media/Videos/index";

export const Posts = [
  {
    id: 1,
    title: "Cadastro de alunos",
    img: apiVideo,
    textPreview: "Sistema de Autenticação e Gestão de Alunos (Frontend)",
    text:
      "Descrição:\n" +
      "Aplicação frontend desenvolvida em React para autenticação de usuários e gestão de alunos. " +
      "O sistema consome uma API REST e permite realizar operações completas de CRUD de alunos, " +
      "incluindo criação, edição, exclusão, listagem e upload de fotos.\n\n" +
      "Arquitetura:\n" +
      "A aplicação segue uma arquitetura modular baseada em React. O roteamento é feito com React Router, " +
      "incluindo proteção de rotas privadas. O gerenciamento de estado global é realizado com Redux Toolkit, " +
      "Redux Saga e Redux Persist, sendo responsável principalmente pela autenticação e sessão do usuário.\n\n" +
      "Autenticação:\n" +
      "Durante o login, uma action Redux dispara uma saga que realiza a requisição para a API. " +
      "Após a autenticação, o token JWT é armazenado no estado global e automaticamente configurado " +
      "no Axios para autenticar requisições subsequentes.\n\n" +
      "Persistência de sessão:\n" +
      "Com o Redux Persist, o estado de autenticação é salvo no storage do navegador. " +
      "Dessa forma, ao atualizar a página, o estado é restaurado e o token volta a ser aplicado " +
      "nos headers de autorização das requisições HTTP.\n\n" +
      "Gerenciamento de alunos:\n" +
      "As telas responsáveis pelo gerenciamento de alunos utilizam principalmente estado local do React " +
      "com chamadas diretas via Axios para a API. Essa abordagem mantém o Redux focado apenas " +
      "no controle de autenticação.\n\n" +
      "Interface:\n" +
      "A interface foi construída utilizando styled-components para estilização, react-icons para ícones " +
      "e react-toastify para feedback visual ao usuário, como notificações de sucesso ou erro.\n\n" +
      "Boas práticas:\n" +
      "O projeto demonstra práticas importantes como separação de responsabilidades, arquitetura modular, " +
      "centralização de requisições HTTP com Axios e proteção de rotas privadas.",
    tags: [expressIcon, nodeIcon, reduxIcon, axiosIcon, mysqlIcon],
    created_at: new Date("2025/10/28"),
  },
  {
    id: 2,
    title: "Agenda",
    img: agendaVideo,
    textPreview:
      "Projeto simples utilizando React, Javascript com Express e MongoDB.",

    text: "Reiciendis earum exercitationem, dolore maiores...",
    tags: [expressIcon, nodeIcon, mysqlIcon],
    created_at: new Date("2025/08/15"),
  },
  {
    id: 3,
    title: "Confidence",
    img: Confidence,
    textPreview:
      "Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",
    tags: [expressIcon, nodeIcon],
    created_at: new Date("2025/02/01"),
  },
];
