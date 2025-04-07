import { RequestHandler } from "express";
import { authSigninSchema } from "../schemas/auth.signin";
import { createUser, getUserByEmail } from "../services/user";
import { generateOTP, validateOTP } from "../services/otp";
import { sendEmail } from "../libs/mailtrap";
import { authSignUpSchema } from "../schemas/auth.signup";
import { authUseOTPSchema } from "../schemas/auth.useotp";
import { createJWT } from "../libs/jwt";


export const signin: RequestHandler = async (req, res) => {
    //validar os dados recebidos
    const data = authSigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({  error: data.error.flatten().fieldErrors });
        return;
    }

    
    //verifica se o usuario existe (baseado no e-mail)
    const user = await getUserByEmail(data.data.email);
    if(!user){
        res.json({ error: "usuário não encontrado" });
        return;
    }

    //Gerar um código OTP para este usuário.
    const otp = await generateOTP(user.id);


    //enviar um email para o usuário
   const oi = await sendEmail(
        user.email,
        "seu codigo de acesso é: " + otp.code,
        "digite seu codigo: " + otp.code
    );
    console.log(oi)

    //devolver o id do código OTP
    res.json({ id: otp.id });
}



export const signUp: RequestHandler = async (req, res) => {
    //validar os dados recebidos
    const data = authSignUpSchema.safeParse(req.body);
    if(!data.success){
        res.json({  error: data.error.flatten().fieldErrors });
        return;
    }
    //verifica se o email já existe 
    const user = await getUserByEmail(data.data.email);
    if(user){
        res.json({ error: "já existe usuário com esse email" });
        return;
    }
    //criar um usuário
    const newUser = await createUser(data.data.name, data.data.email);


    //retornar os dados do usuário ja recém-criado
    res.status(201).json({ user: newUser })
}

export const useOTP: RequestHandler = async (req, res) => {
    //validar os dados recebidos
    const data = authUseOTPSchema.safeParse(req.body);
    if(!data.success){
        res.json({  error: data.error.flatten().fieldErrors });
        return;
    }

    //validar o OTP
    const user = await validateOTP(data.data.id, data.data.code);
    if(!user){
        res.json({ error: "otp invalido ou experado" });
        return;
    }

    //Cria o jwt
    const token = createJWT(user.id);
     
    //retorna o jwt
    res.json({ token, user })
}