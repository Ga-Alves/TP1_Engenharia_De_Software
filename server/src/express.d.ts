import { TokenData } from "./middlewares/userLogged";

export { };

declare global {
  namespace Express {
    export interface Request {
      token: TokenData;
    }
  }
}

