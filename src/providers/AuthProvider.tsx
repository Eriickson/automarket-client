import React, { FC } from "react";
import { IAuth } from "@/shared";
import { useAction } from "@/store";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface AuthProviderProps extends IAuth {}

export const AuthProvider: FC<AuthProviderProps> = ({ children, ...props }) => {
  const { setAuth } = useAction();

  setAuth(props);
  console.log(props);

  return <>{children}</>;
};
