import React, { FC } from "react";
import { ISession } from "@/shared";
import { useAction } from "@/store";

export interface AuthProviderProps {
  isAuth: boolean;
  session?: ISession;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, isAuth, session = {} }) => {
  const { setAuth } = useAction();
  setAuth({ isAuth, user: session?.user });

  return <>{children}</>;
};
