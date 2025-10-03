# MoneyMapp TCC (Frontend)

Aplicação de Educação Financeira construída com React (Vite), Tailwind CSS, React Router, Axios e Recharts. Implementa autenticação JWT, rotas privadas, dashboards e relatórios.

## Tecnologias
- React + Vite (JavaScript)
- Tailwind CSS
- React Router DOM
- Axios
- Recharts
- date-fns

## Configuração
1. Copie `.env.example` para `.env` e defina:
   ```
   VITE_API_URL=http://localhost:3000
   ```
2. Instale dependências:
   ```
   npm install
   ```
3. Rodar em desenvolvimento:
   ```
   npm run dev
   ```
4. Build produção:
   ```
   npm run build && npm run preview
   ```

## Estrutura principal
```
src/
  App.jsx
  main.jsx
  index.css
  context/AuthContext.jsx
  routes/Rotas.jsx
  services/api.js
  components/
  pages/
  utils/
```

## Autenticação
- Token e usuário persistidos em localStorage (`mm_token`, `mm_usuario`).
- Interceptador adiciona `Authorization: Bearer <token>`.
- Erro 401 força logout e redireciona para `/login`.

## Rotas
Públicas: `/login`, `/register`
Privadas: `/dashboard`, `/transactions`, `/goals`, `/reports`, `/education`, `/settings`

## Componentes principais
- Navbar, Sidebar, CardResumo, Tabela, Modal, Input, Botao, Alerta, GraficoPizza, GraficoBarra

## Melhorias futuras
- Code splitting para reduzir bundle.
- Testes automatizados (Jest/RTL).
- Dark mode.

## Licença
Ver arquivo LICENSE.
# moneymap-2
Projeto TCC - Site de Educação Financeira (Frontend + Backend + Banco de Dados)
