// export type ExtendedRequest = Request & {
//     userId?: number;
// }

import { Request } from "express";

export interface ExtendedRequest extends Request {
    userId?: number;
}