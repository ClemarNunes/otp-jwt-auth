# OTP + JWT Authentication

Este projeto implementa um sistema de autenticação utilizando **OTP** e **JWT** para garantir segurança adicional na autenticação de usuários.

## Tecnologias

- **JWT** para autenticação segura.
- **OTP** para uma camada extra de segurança (autenticação de dois fatores).

## Tecnologias Utilizadas

- **Express**: Framework web para Node.js
- **JWT (jsonwebtoken)**: Para autenticação baseada em tokens.
- **OTP (UUID)**: Utilizado para gerar códigos de autenticação temporários.
- **Prisma**: ORM para interagir com o banco de dados.
- **TypeScript**: Para tipagem estática e maior segurança no desenvolvimento.
- **Zod**: Para validação de dados.
- **Helmet**: Para melhorar a segurança das requisições HTTP.
- **Dotenv**: Para gerenciar variáveis de ambiente.
- **Mailtrap**: Para envio de e-mails em ambiente de teste.

- **Autenticação JWT**: Geração de token para autenticação de usuários.
- **Autenticação OTP**: Geração e envio de códigos OTP para validação de dois fatores.
- **Envio de e-mail**: Utiliza Mailtrap para enviar e-mails com o código OTP.

## Funcionalidades

- **Autenticação JWT**: Geração de token para autenticação de usuários.
- **Autenticação OTP**: Geração e envio de códigos OTP para validação de dois fatores.
- **Envio de e-mail**: Utiliza o Mailtrap para enviar e-mails com o código OTP em ambiente de testes.


## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/ClemarNunes/otp-jwt-auth.git

2. Instale as dependências:
    npm install

3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione as variáveis necessárias. Um exemplo pode ser:
    1. **DATABASE_URL**: Uma URL de conexão do banco de dados PostgreSQL.
    2. **MAILTRAP_TOKEN**: Seu token para autenticação no Mailtrap (um serviço para testes de envio de e-mails).
    3. **JWT_SECRET**: Uma chave secreta usada para distribuir seus tokens JWT.

4. Rodando o projeto:
    Para rodar o servidor em modo de desenvolvimento, execute:
    npm run dev
    O servidor será iniciado em http://localhost:3000.
