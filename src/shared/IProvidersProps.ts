import { IAuth, ISession } from "./Auth";

export interface IProvidersProps {
  isAuth: IAuth;
  session: ISession;
}
