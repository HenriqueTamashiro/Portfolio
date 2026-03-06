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
    textPreview:
      "O sistema consome uma API REST e permite realizar operações completas de CRUD de alunos, incluindo criação, edição, exclusão, listagem e upload de fotos.",
    text: [
      {
        title: "Resumo",
        content:
          "O sistema consome uma API REST e permite realizar operações completas de CRUD de alunos, incluindo criação, edição, exclusão, listagem e upload de fotos.",
      },
      {
        title: "Arquitetura",
        content:
          "A aplicação segue uma arquitetura modular baseada em React. O roteamento é feito com React Router, incluindo proteção de rotas privadas. O gerenciamento de estado global é realizado com Redux Toolkit, Redux Saga e Redux Persist, sendo responsável principalmente pela autenticação e sessão do usuário.",
      },
      {
        title: "Autenticação",
        content:
          "Durante o login, uma action Redux dispara uma saga que realiza a requisição para a API. Após a autenticação, o token JWT é armazenado no estado global e automaticamente configurado no Axios para autenticar requisições subsequentes.",
      },
      {
        title: "Persistência de sessão",
        content:
          "Com o Redux Persist, o estado de autenticação é salvo no storage do navegador. Dessa forma, ao atualizar a página, o estado é restaurado e o token volta a ser aplicado nos headers de autorização das requisições HTTP.",
      },
      {
        title: "Gerenciamento de alunos",
        content:
          "As telas responsáveis pelo gerenciamento de alunos utilizam principalmente estado local do React com chamadas diretas via Axios para a API. Essa abordagem mantém o Redux focado apenas no controle de autenticação.",
      },
      {
        title: "Interface",
        content:
          "A interface foi construída utilizando styled-components para estilização, react-icons para ícones e react-toastify para feedback visual ao usuário, como notificações de sucesso ou erro.",
      },
      {
        title: "Boas práticas",
        content:
          "O projeto demonstra práticas importantes como separação de responsabilidades, arquitetura modular, centralização de requisições HTTP com Axios e proteção de rotas privadas.",
      },
    ],
    tags: [expressIcon, nodeIcon, reduxIcon, axiosIcon, mysqlIcon],
    created_at: new Date("2025/10/28"),
  },
  {
    id: 2,
    title: "Agenda",
    img: agendaVideo,
    textPreview:
      "A aplicação consiste em uma API REST desenvolvida em Node.js responsável pelo gerenciamento de dados e recursos da aplicação. O sistema permite realizar operações completas de criação, edição, exclusão e listagem de registros, além do envio e gerenciamento de arquivos associados.",

    text: [
      {
        title: "Resumo",
        content:
          "A aplicação consiste em uma API REST desenvolvida em Node.js responsável pelo gerenciamento de dados e recursos da aplicação. O sistema permite realizar operações completas de criação, edição, exclusão e listagem de registros, além do envio e gerenciamento de arquivos associados.",
      },
      {
        title: "Arquitetura",
        content:
          "A aplicação segue uma arquitetura em camadas que separa responsabilidades entre rotas, controladores, modelos e middlewares. Essa organização mantém a lógica de negócio desacoplada da camada de roteamento, facilitando manutenção, escalabilidade e organização do código.",
      },
      {
        title: "Autenticação",
        content:
          "O sistema utiliza autenticação baseada em JSON Web Token (JWT). Durante o processo de login, as credenciais do usuário são validadas e, após a autenticação bem-sucedida, um token é gerado para ser utilizado nas requisições subsequentes.",
      },
      {
        title: "Proteção de rotas",
        content:
          "As rotas privadas da aplicação são protegidas por um middleware responsável por validar o token JWT enviado pelo cliente. Esse processo garante que apenas usuários autenticados possam acessar ou modificar os recursos disponíveis na API.",
      },
      {
        title: "Manipulação de dados",
        content:
          "A API disponibiliza endpoints responsáveis pela criação, atualização, listagem e remoção de registros. As operações seguem o padrão REST, permitindo uma comunicação clara e consistente entre cliente e servidor.",
      },
      {
        title: "Upload de arquivos",
        content:
          "A aplicação também permite o envio de arquivos para o servidor utilizando middleware especializado para upload. Os arquivos são armazenados em diretórios específicos da aplicação e podem ser vinculados a registros existentes no banco de dados.",
      },
      {
        title: "Tecnologias",
        content:
          "O projeto foi desenvolvido utilizando Node.js e Express para construção da API REST, Sequelize como ORM para comunicação com o banco de dados relacional, além de bibliotecas auxiliares para autenticação, upload de arquivos e gerenciamento de variáveis de ambiente.",
      },
      {
        title: "Boas práticas",
        content:
          "O projeto demonstra boas práticas como separação de responsabilidades, organização modular do código, uso de autenticação segura, abstração do banco de dados através de ORM e estrutura preparada para ambientes de desenvolvimento e produção.",
      },
    ],
    tags: [expressIcon, nodeIcon, mysqlIcon],
    created_at: new Date("2025/08/15"),
  },
  {
    id: 3,
    title: "Confidence",
    img: Confidence,
    textPreview:
      "Esta foi uma das primeiras aplicações web que desenvolvi. O projeto consiste em um sistema monolítico para gestão e liberação de acessos, onde o frontend estático e o backend em Node.js são executados no mesmo servidor. A aplicação foi criada com o objetivo de praticar conceitos fundamentais de desenvolvimento web, autenticação de usuários e integração com banco de dados.",
    text: [
      {
        title: "Resumo",
        content:
          "Esta foi uma das primeiras aplicações web que desenvolvi. O projeto consiste em um sistema monolítico para gestão e liberação de acessos, onde o frontend estático e o backend em Node.js são executados no mesmo servidor. A aplicação foi criada com o objetivo de praticar conceitos fundamentais de desenvolvimento web, autenticação de usuários e integração com banco de dados.",
      },
      {
        title: "Arquitetura",
        content:
          "A aplicação segue uma arquitetura monolítica simples. O servidor Express é responsável tanto pelas rotas da API quanto pela entrega dos arquivos estáticos do frontend. As páginas HTML e scripts JavaScript compõem a camada de apresentação, enquanto o backend centraliza as regras de negócio e a comunicação com o banco de dados.",
      },
      {
        title: "Autenticação",
        content:
          "O sistema implementa autenticação utilizando JSON Web Token (JWT). Durante o login, as credenciais do usuário são verificadas e um token é gerado para autenticar requisições subsequentes nas rotas administrativas. As senhas são armazenadas utilizando hash criptográfico com bcrypt.",
      },
      {
        title: "Fluxo da aplicação",
        content:
          "Usuários podem consultar acessos através da página principal informando um identificador e uma chave de acesso. O backend retorna as informações correspondentes e remove o registro após a consulta, implementando um fluxo de acesso de uso único. Usuários autenticados possuem acesso a páginas administrativas para geração de chaves e cadastro de novos acessos.",
      },
      {
        title: "Persistência de dados",
        content:
          "Os dados da aplicação são armazenados em um banco de dados MySQL. O backend se comunica com o banco utilizando o driver mysql, mantendo registros de usuários operadores e dos acessos cadastrados no sistema.",
      },
      {
        title: "Tecnologias",
        content:
          "O backend foi desenvolvido utilizando Node.js e Express, com integração ao banco de dados MySQL. Para autenticação e segurança são utilizadas bibliotecas como jsonwebtoken e bcrypt. O frontend foi construído utilizando HTML, CSS e JavaScript puro. O projeto também utiliza dotenv para variáveis de ambiente, cors para controle de origem e express-session para gerenciamento de sessões.",
      },
      {
        title: "Deploy",
        content:
          "O deploy da aplicação é realizado em um servidor EC2 utilizando GitHub Actions. O pipeline automatiza a atualização do código no servidor através de conexão SSH sempre que alterações são enviadas ao repositório.",
      },
      {
        title: "Boas práticas",
        content:
          "Mesmo sendo um projeto inicial, a aplicação demonstra conceitos importantes como autenticação baseada em token, integração com banco de dados relacional, organização básica entre frontend e backend e automação de deploy utilizando GitHub Actions.",
      },
    ],
    tags: [expressIcon, nodeIcon],
    created_at: new Date("2025/02/01"),
  },
];
