 import { Router } from "express";
 import * as pingController from "../controllers/ping";
 import * as authControoler from "../controllers/auth";
 import * as privateController from "../controllers/private";
import { verifyJWT } from "../libs/jwt";

 export const mainRouter = Router();


 mainRouter.get("/ping", pingController.ping);

 mainRouter.post("/auth/signin", authControoler.signin);
 mainRouter.post("/auth/signup", authControoler.signUp);

 mainRouter.post("/auth/useotp", authControoler.useOTP);

 mainRouter.get("/private", verifyJWT, privateController.test);
 