# Portfólio

Aplicação web de portfólio pessoal desenvolvida em React com Vite. O projeto apresenta informações profissionais, projetos recentes, stack tecnológica e contato, com foco em interface visual customizada, animações e responsividade.

## Visão geral

- Frontend SPA com React 19 e React Router
- Estilização com `styled-components`, Tailwind CSS e Bootstrap
- Gerenciamento de estado com Redux Toolkit
- Barra/progresso de carregamento de mídias por página
- Componentes de destaque: Hero, Timeline, Cards de projetos, FocusWindow e formulário de contato

## Estrutura do repositório

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
- npm 10+ (ou versão compatível com seu Node)

## Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/HenriqueTamashiro/Portfolio.git
cd Portfolio/frontend-vite
```

2. Instale as dependências:
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

## Scripts disponíveis

No diretório `frontend-vite`:

- `npm run dev`: inicia servidor de desenvolvimento (Vite)
- `npm run build`: gera build de produção
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

## Licença

Este projeto é de uso pessoal para apresentação de portfólio.
