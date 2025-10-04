# 💰 MoneyMapp TCC - Plataforma de Educação Financeira  

Aplicação **completa (Frontend + Backend + Banco)** desenvolvida como **Trabalho de Conclusão de Curso (TCC)** em TI.  

O **MoneyMapp** é um **simulador educacional de finanças pessoais**, que ajuda usuários a aprenderem sobre **organização financeira, metas e investimentos** de forma prática.  
⚠️ O site **não exige conexão com bancos reais** (BB, Itaú, Caixa, etc.) → trabalhamos com **dados simulados (mock)** para garantir segurança e independência.  

---

## 🎯 Objetivo do Projeto
- Criar uma **plataforma funcional** de **educação financeira**.  
- Ensinar jovens e estudantes a controlar receitas e despesas, criar metas e analisar relatórios.  
- Entregar uma **experiência realista** (dashboard, transações, relatórios, educação) sem depender de contas bancárias reais.  
- Apresentar o TCC como **um produto pronto, moderno e seguro**, que demonstra domínio de **Frontend, Backend e Banco de Dados**.  

---

## 👥 Público-Alvo
- Jovens estudantes (ensino médio, universitários).  
- Jovens profissionais iniciando vida financeira.  
- Pessoas que querem aprender **noções básicas de finanças pessoais** sem riscos.  

---

## ✨ Metas do Projeto
### 🔹 Enzo (Frontend)
- Criar uma UI moderna, responsiva e intuitiva.  
- Implementar páginas funcionais (Dashboard, Transações, Metas, Relatórios, Educação, Configurações).  
- Incluir **dark/light mode**, animações e gráficos interativos.  
- Integrar ao backend com Axios.  
- Deploy no **Vercel**.  

### 🔹 João Gabriel (Backend)
- Criar API REST com **Node.js + Express**.  
- Rotas: login, registro, transações, metas, relatórios, artigos de educação.  
- Autenticação com **JWT**.  
- Middlewares de segurança (CORS, validação, proteção de rotas).  
- Deploy no **Railway/Render**.  

### 🔹 Roberto (Banco de Dados)
- Estrutura em **MySQL**.  
- Tabelas:  
  - `users` (id, nome, email, senha hash)  
  - `transactions` (id, user_id, tipo, valor, categoria, data)  
  - `goals` (id, user_id, titulo, valor_meta, valor_atual, prazo)  
  - `articles` (id, titulo, conteudo, dificuldade, tempo_leitura)  
- Relacionamentos corretos (1:N entre usuários e transações, usuários e metas).  
- Criar queries para relatórios (receitas vs despesas, evolução mensal).  

---

## ⚙️ Requisitos
### Softwares necessários
- **Node.js 18+** (obrigatório para rodar backend e frontend).  
- **npm** (ou pnpm/yarn, mas usamos npm).  
- **MySQL** (local ou em nuvem - Railway recomendado).  
- **Git** (para versionamento e deploy).  
- **VS Code** (com extensão GitHub Copilot ativada).  

### Dependências principais
#### Frontend
- React (Vite)  
- Tailwind CSS  
- React Router  
- Axios  
- Recharts  
- date-fns  

#### Backend
- Node.js + Express  
- MySQL2  
- JWT  
- bcrypt (hash de senhas)  
- cors, dotenv  

---

## 📂 Estrutura do Projeto
moneymap-tcc/
│
├── frontend/ (Enzo)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── services/
│ │ └── routes/
│ └── ...
│
├── backend/ (João Gabriel)
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── models/
│ │ └── middlewares/
│ └── ...
│
└── database/ (Roberto)
└── schema.sql

yaml
Copiar código

---

## 🚀 Passo a Passo para Desenvolvimento
### 🔹 Enzo (Frontend)
1. Criar projeto:  
   ```bash
   npm create vite@latest frontend
   cd frontend
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
Implementar páginas: Home, Login, Dashboard, Transações, Metas, Relatórios, Educação, Configurações.

Usar Axios para consumo da API.

Integrar gráficos com Recharts.

Deploy no Vercel.

🔹 João Gabriel (Backend)
Criar projeto:

bash
Copiar código
mkdir backend && cd backend
npm init -y
npm install express mysql2 cors dotenv jsonwebtoken bcrypt
Configurar conexão MySQL no .env.

Criar rotas:

POST /auth/login

POST /auth/register

GET/POST/PUT/DELETE /transactions

GET/POST/PUT/DELETE /goals

GET /reports

GET /articles

Usar JWT para autenticação.

Deploy no Railway ou Render.

🔹 Roberto (Banco de Dados)
Instalar MySQL Workbench.

Criar o banco moneymap_db.

Criar tabelas:

sql
Copiar código
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(255)
);

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  tipo ENUM('entrada','saida'),
  valor DECIMAL(10,2),
  categoria VARCHAR(50),
  data DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE goals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  titulo VARCHAR(100),
  valor_meta DECIMAL(10,2),
  valor_atual DECIMAL(10,2),
  prazo DATE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  conteudo TEXT,
  dificuldade ENUM('iniciante','intermediario','avancado'),
  tempo_leitura INT
);
Popular tabelas com dados simulados (mock).

🔒 Rotas do Sistema
Públicas: /home, /login, /register

Privadas: /dashboard, /transacoes, /metas, /relatorios, /educacao, /configuracoes

📦 Scripts
Frontend
Desenvolvimento: npm run dev

Build produção: npm run build

Preview: npm run preview

Backend
Iniciar API: npm run dev (nodemon)

Produção: node index.js

☁️ Deploy
Frontend: Vercel

Backend: Railway/Render

Banco: MySQL Railway (cloud)

🎓 Expectativa para o TCC
Na apresentação queremos mostrar:

Um site funcional, navegável e bonito.

Usuário conseguindo simular transações, criar metas e visualizar relatórios.

Página de educação financeira com artigos.

Demonstração clara de integração entre Frontend + Backend + Banco.

Provar que o grupo domina as três camadas de desenvolvimento.

🏆 Resultado esperado
Mostrar organização do time (cada um cumpriu sua parte).

Entregar um site apresentável, moderno e didático.

Conseguir nota máxima no TCC 🚀

👥 Time
Enzo Prado Favero de Campos → Frontend (React, Tailwind, Vercel)

João Gabriel → Backend (Node, Express, JWT, Railway/Render)

Roberto → Banco de Dados (MySQL, modelagem, queries)