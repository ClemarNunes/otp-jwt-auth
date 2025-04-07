# OTP + JWT Authentication

This project implements an authentication system using **OTP** (One Time Password) and **JWT** (JSON Web Token) to provide additional security in user authentication.

## Technologies

- **JWT** for secure authentication.
- **OTP** for an extra layer of security (two-factor authentication).

## Technologies Used

- **Express**: Web framework for Node.js.
- **JWT (jsonwebtoken)**: For token-based authentication.
- **OTP (UUID)**: Used to generate temporary authentication codes.
- **Prisma**: ORM for interacting with the database.
- **TypeScript**: For static typing and greater development security.
- **Zod**: For data validation.
- **Helmet**: To improve HTTP request security.
- **Dotenv**: For managing environment variables.
- **Mailtrap**: For sending test emails in a safe environment.

- **JWT Authentication**: Generates tokens for user authentication.
- **OTP Authentication**: Generates and sends OTP codes for two-factor validation.
- **Email Sending**: Uses Mailtrap to send OTP codes via email.

## Features

- **JWT Authentication**: Generates tokens for user authentication.
- **OTP Authentication**: Generates and sends OTP codes for two-factor validation.
- **Email Sending**: Uses Mailtrap to send OTP codes via email in a test environment.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/ClemarNunes/otp-jwt-auth.git

2. Install the dependencies:
    npm install

3. Configure the environment variables:
Create a .env file at the root of the project and add the necessary variables. An example might be:
1. **DATABASE_URL**: A URL de conexão do banco de dados PostgreSQL.
2. **MAILTRAP_TOKEN**: Seu token para autenticação no Mailtrap (um serviço para testes de envio de e-mails).
3. **JWT_SECRET**: A chave secreta usada para assinar seus tokens JWT.

4. Running the project:
To run the server in development mode, run:
    npm run dev
    The server will be started at http://localhost:3000.