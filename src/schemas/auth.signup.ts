import { z } from "zod";

export const authSignUpSchema = z.object({
    name: z.string({ message: "campo name é obrigatório" }),
    email: z.string({ message: "campo email é obrigatório" }).email("e-mail inválido")
});