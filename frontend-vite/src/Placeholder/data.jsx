import ImgTeste from "../assets/imgs/image.png";
import {
  agendaVideo,
  apiVideo,
  expressIcon,
  nodeIcon,
  mysqlIcon,
} from "../assets/Media/Videos/index";

export const Posts = [
  {
    id: 1,
    title: "Cadastro de alunos",
    img: apiVideo,
    textPreview:
      "Feito em React com Redux, Axios e Iodash no Frontend, consumindo uma apiREST no backend feita com Express.js, Multer, Sucrase e Sequelize. ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quaerat aliquam expedita quod, cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",
    tags: [expressIcon, nodeIcon, mysqlIcon],
    created_at: new Date(),
  },
  {
    id: 2,
    title: "Agenda",
    img: agendaVideo,
    textPreview:
      "Projeto simples utilizando React, Javascript com Express e MongoDB.",

    text: "Reiciendis earum exercitationem, dolore maiores...",
    tags: [expressIcon, nodeIcon, mysqlIcon],
    created_at: new Date(),
  },
  {
    id: 3,
    title: "Confidence",
    img: ImgTeste,
    textPreview:
      "Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi.Lorem, ipsum dolor sit amet consectetur adipisicingorem, ipsum dolor sit amet consectetur adipisicing el elit.Quaerat aliquam expedita quod, \n cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",
    tags: [expressIcon, nodeIcon],
    created_at: new Date(),
  },
  {
    id: 4,
    title: "Conteúdo 4",
    img: ImgTeste,
    textPreview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quaerat aliquam expedita quod, cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",

    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.QuaeratAtque nihil Lorem ipsum dolor sit amet...",
    tags: [expressIcon],
    created_at: new Date(),
  },
  {
    id: 5,
    title: "Conteúdo 5",
    img: ImgTeste,
    textPreview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quaerat aliquam expedita quod, cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",

    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.QuaeratLorem, ipsum dolor sit amet consectetur adipisicing elit.QuaeratAtque nihil Lorem ipsum dolor sit amet...",
    tags: [expressIcon, nodeIcon, mysqlIcon],
    created_at: new Date(),
  },
  {
    id: 6,
    title: "Conteúdo 6",
    img: ImgTeste,
    textPreview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quaerat aliquam expedita quod, cumque unde totam aspernatur, culpa molestiae velit eveniet provident, cum sunt nobis assumenda optio rem at ex. Quasi. ",

    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.QuaeratLorem, ipsum dolor sit amet consectetur adipisicing elit.QuaeratAtque nihil Lorem ipsum dolor sit amet...",
    tags: [expressIcon, nodeIcon, mysqlIcon],
    created_at: new Date(),
  },
];
