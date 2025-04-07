import { z } from "zod";

export const authUseOTPSchema = z.object({
    id: z.string({ message: "ID do OTP  obrigatorio" }),
    code: z.string({ message: "OTP obrigatório" }).length(6, "codigo precisa de 6 numeros")
});