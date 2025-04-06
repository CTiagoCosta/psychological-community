### 🧠 PsiConnect

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Começando](#-começando)

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Executando o Projeto](#executando-o-projeto)



- [Deploy](#-deploy)
- [Roadmap](#-roadmap)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)


## 🚀 Sobre o Projeto

**PsiConnect** é uma plataforma digital projetada para criar uma comunidade de suporte, troca de conhecimentos e networking entre estudantes e profissionais da psicologia. A plataforma oferece recursos como fóruns de discussão, biblioteca de materiais, grupos de interesse específicos, intervisão profissional, capacitações e sistema de encaminhamento de pacientes.

### 💡 Motivação

O projeto nasceu da necessidade de:

- Oferecer apoio para estudantes com dúvidas sobre carreira, estágios e regulamentações
- Dar suporte a profissionais autônomos com questões administrativas e de mercado
- Criar um ambiente de intervisão, capacitação e encaminhamento para atendimentos


## ✨ Funcionalidades

### Plano Gratuito

- 👤 **Perfil Básico**: Informações sobre formação e áreas de interesse
- 💬 **Fórum de Discussão**: Participação em discussões por categorias
- 📚 **Biblioteca de Recursos Básicos**: Acesso a materiais essenciais
- 👥 **Grupos de Interesse**: Participação em grupos por área de atuação


### Plano Premium (Psicólogos com CRP)

- 👑 **Perfil Profissional Completo**: Com destaque e portfólio detalhado
- 🔄 **Encaminhamento de Pacientes**: Recebimento de encaminhamentos conforme disponibilidade
- 👨‍👩‍👧‍👦 **Intervisão Profissional**: Encontros mensais entre profissionais da mesma abordagem
- 🎓 **Capacitações**: Aulas mensais sobre temas administrativos, financeiros e de divulgação
- 🧠 **Mentorias e Supervisão**: Conexão entre profissionais experientes e iniciantes


## 🛠️ Tecnologias

### Frontend

- **Next.js**: Framework React com renderização híbrida
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Shadcn/UI**: Componentes de UI reutilizáveis


### Backend

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **Prisma**: ORM (Object-Relational Mapping)
- **JWT**: Autenticação baseada em tokens


### Banco de Dados

- **MySQL**: Sistema de gerenciamento de banco de dados relacional


## 📁 Estrutura do Projeto

```plaintext
psiconnect/
├── frontend/                # Aplicação Next.js
│   ├── app/                 # Rotas e páginas (App Router)
│   ├── components/          # Componentes React reutilizáveis
│   ├── lib/                 # Utilitários e funções auxiliares
│   ├── public/              # Arquivos estáticos
│   └── ...
├── backend/                 # API Node.js/Express
│   ├── src/
│   │   ├── controllers/     # Controladores para cada recurso
│   │   ├── middlewares/     # Middlewares (autenticação, validação)
│   │   ├── models/          # Definições de tipos/interfaces
│   │   ├── routes/          # Rotas da API
│   │   ├── services/        # Lógica de negócios
│   │   ├── prisma/          # Configuração do Prisma ORM
│   │   └── ...
│   └── ...
└── ...
```

## 🏁 Começando

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- MySQL (v8 ou superior)


### Instalação

1. Clone o repositório

```shellscript
git clone https://github.com/seu-usuario/psiconnect.git
cd psiconnect
```


2. Instale as dependências do frontend

```shellscript
cd frontend
npm install
```


3. Instale as dependências do backend

```shellscript
cd ../backend
npm install
```




### Configuração do Banco de Dados

1. Crie um banco de dados MySQL

```sql
CREATE DATABASE psiconnect;
```


2. Configure as variáveis de ambiente

```shellscript
# No diretório backend, crie um arquivo .env
DATABASE_URL="mysql://usuario:senha@localhost:3306/psiconnect"
JWT_SECRET="sua_chave_secreta_para_jwt"
```


3. Execute as migrações do Prisma

```shellscript
npx prisma migrate dev --name init
```




### Executando o Projeto

1. Inicie o backend

```shellscript
# No diretório backend
npm run dev
```


2. Inicie o frontend

```shellscript
# No diretório frontend
npm run dev
```


3. Acesse a aplicação em `http://localhost:3000`


## 🚢 Deploy

### Frontend (Next.js)

#### Deploy na Vercel (Recomendado)

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente necessárias
4. A Vercel detectará automaticamente o projeto Next.js e fará o deploy


#### Outras Opções

- **Netlify**: Conecte seu repositório ou faça upload da pasta de build
- **AWS Amplify**: Oferece deploy simples para aplicações Next.js


### Backend (Node.js)

#### Deploy no Heroku

1. Crie uma conta no [Heroku](https://heroku.com)
2. Instale a CLI do Heroku e faça login

```shellscript
heroku login
```


3. Crie uma nova aplicação

```shellscript
heroku create psiconnect-api
```


4. Configure as variáveis de ambiente

```shellscript
heroku config:set DATABASE_URL=sua_url_de_banco_de_dados
heroku config:set JWT_SECRET=sua_chave_secreta
```


5. Faça o deploy

```shellscript
git subtree push --prefix backend heroku main
```




#### Outras Opções

- **Railway**: Plataforma moderna para deploy de aplicações
- **DigitalOcean App Platform**: Solução gerenciada para aplicações Node.js
- **AWS Elastic Beanstalk**: Serviço de deploy e escalabilidade da AWS


## 📈 Roadmap

- **Fase 1**: MVP com funcionalidades básicas

- Autenticação de usuários
- Perfis básicos
- Fórum de discussão
- Biblioteca de recursos



- **Fase 2**: Funcionalidades premium

- Perfis profissionais completos
- Sistema de encaminhamento de pacientes
- Intervisão profissional
- Capacitações



- **Fase 3**: Expansão e melhorias

- Aplicativo móvel
- Integração com calendário
- Sistema de pagamentos
- Marketplace de serviços





## 👥 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request


Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de submissão de Pull Requests.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 📞 Contato

Nome - [seu-email@exemplo.com](E-mail:ctsctiago@gmail.com)

Link do Projeto: [https://github.com/CTiagoCosta/psychological-community](https://github.com/seu-usuario/psiconnect)