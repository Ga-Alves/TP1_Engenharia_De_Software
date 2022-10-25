import { TokenData } from "../src/middlewares/userLogged";

export { };

declare global {
  namespace Express {
    export interface Request {
      token: TokenData;
    }
  }
}

