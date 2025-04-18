import { Response, Request } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { getUserById } from "../services/user";

export const test = async (req: ExtendedRequest, res: Response) => {
      if(!req.userId){
        res.status(401).json({ error: "acesso negado" });
        return;
      }
      
      const user = await getUserById(req.userId);

      if(!user){
        res.status(401).json({ error: "acesso negado" });
        return;
      }

      res.json({ user });
}