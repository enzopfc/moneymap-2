# MoneyMapp TCC (Frontend)

Aplicação frontend em React (Vite) para um site de Educação Financeira. Inclui autenticação JWT, rotas privadas, gráficos com Recharts, UI com Tailwind CSS, e consumo de API com Axios.

## Requisitos
- Node.js 18+
- npm

## Instalação
1. Copie o arquivo `.env.example` para `.env` e configure a URL da API:
   - `VITE_API_URL=http://localhost:3000`
2. Instale as dependências e rode o projeto.

## Scripts
- Desenvolvimento: `npm run dev`
- Build produção: `npm run build`
- Preview produção: `npm run preview`

## Stack
- Vite + React (JavaScript)
- Tailwind CSS
- React Router
- Axios
- Recharts
- date-fns

## Estrutura
- `src/context/AuthContext.jsx`: Autenticação, token no localStorage, interceptador 401
- `src/services/api.js`: Axios instance com baseURL `${import.meta.env.VITE_API_URL}`
- `src/routes/Rotas.jsx`: Rotas públicas/privadas com `RotaPrivada`
- `src/components/*`: Componentes compartilhados (Navbar, Sidebar, Tabela, Modal, Gráficos...)
- `src/pages/*`: Páginas (Login, Registrar, Dashboard, Transações, Metas, Relatórios, Educação, Configurações, 404)
- `src/utils/*`: Formatadores e validações

## Rotas
- Públicas: `/login`, `/register`
- Privadas: `/dashboard`, `/transactions`, `/goals`, `/reports`, `/education`, `/settings`

## Observações
- O Tailwind é processado via PostCSS; avisos de `@tailwind` no editor são normais fora do pipeline de build.
- As requisições autenticadas enviam `Authorization: Bearer <token>` automaticamente.
- Erros 401 fazem sign-out e redirecionam para `/login`.

## Deploy (Vercel)
- Configure a variável de ambiente `VITE_API_URL` no projeto na Vercel.
- Faça o deploy do repositório. O build é feito com `npm run build`.