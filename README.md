# Portfolio

Aplicacao web de portfolio pessoal desenvolvida em React com Vite. O projeto apresenta informacoes profissionais, projetos recentes, stack tecnologica e contato, com foco em interface visual customizada, animacoes e responsividade.

## Visao geral

- Frontend SPA com React 19 e React Router
- Estilizacao com `styled-components`, Tailwind CSS e Bootstrap
- Gerenciamento de estado com Redux Toolkit
- Barra/progresso de carregamento de midias por pagina
- Componentes de destaque: Hero, Timeline, Cards de projetos, FocusWindow e formulario de contato

## Estrutura do repositorio

```text
Portfolio/
  frontend-vite/
    src/
      components/
      pages/
      routes/
      store/
      styles/
```

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (ou versao compativel com seu Node)

## Como rodar localmente

1. Clone o repositorio:
```bash
git clone https://github.com/HenriqueTamashiro/Portfolio.git
cd Portfolio/frontend-vite
```

2. Instale as dependencias:
```bash
npm install
```

3. Execute em modo desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador:
```text
http://localhost:5173
```

## Scripts disponiveis

No diretorio `frontend-vite`:

- `npm run dev`: inicia servidor de desenvolvimento (Vite)
- `npm run build`: gera build de producao
- `npm run preview`: sobe servidor para testar o build
- `npm run lint`: executa o ESLint

## Rotas principais

- `/` Home
- `/about` Sobre
- `/projects` Projetos
- `/contact` Contato

## Stack principal

- React 19
- Vite 7
- React Router 7
- Styled Components 6
- Tailwind CSS 4
- Bootstrap 5 + Bootstrap Icons
- Redux Toolkit + React Redux

## Licenca

Este projeto e de uso pessoal para apresentacao de portfolio.
