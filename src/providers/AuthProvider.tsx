import React, { FC } from "react";
import { IAuth, ISession } from "@/shared";

interface AuthProviderProps {
  isAuth: IAuth;
  session: ISession;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, isAuth }) => {
  return <>{children}</>;
};
