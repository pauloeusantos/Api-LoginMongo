# Api-LoginMongo

Este projeto é uma API de autenticação e gerenciamento de usuários construída com Node.js, Express e MongoDB. Ele permite o registro, login, atualização, exclusão e obtenção de usuários, utilizando autenticação JWT.

## Funcionalidades

- **Registro de Usuários**: Criação de novos usuários com hashing de senha.
- **Login de Usuários**: Autenticação de usuários com geração de token JWT.
- **Atualização de Usuários**: Atualização de informações do usuário.
- **Exclusão de Usuários**: Remoção de usuários do sistema.
- **Obtenção de Usuários**: Recuperação de detalhes de um usuário específico ou de todos os usuários.
- **Autenticação JWT**: Proteção de rotas com middleware de autenticação.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para construção de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM para modelagem de dados no MongoDB.
- **bcryptjs**: Biblioteca para hashing de senhas.
- **jsonwebtoken**: Biblioteca para geração e verificação de tokens JWT.
- **dotenv**: Biblioteca para gerenciamento de variáveis de ambiente.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Api-LoginMongo.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Api-LoginMongo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   MONGO_URI=seu_mongo_uri
   JWT_SECRET=sua_chave_secreta
   PORT=5000
   ```

5. Inicie o servidor:
   ```bash
   npm start ou node index.js
   ```

## Uso

- **Registro de Usuário**: `POST /api/users/register`
- **Login de Usuário**: `POST /api/users/login`
- **Atualização de Usuário**: `PUT /api/users/:id`
- **Exclusão de Usuário**: `DELETE /api/users/:id`
- **Obtenção de Usuário**: `GET /api/users/:id`
- **Obtenção de Todos os Usuários**: `GET /api/users`