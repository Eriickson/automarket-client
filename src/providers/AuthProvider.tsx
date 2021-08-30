import React, { FC } from "react";
import { AuthPayload } from "@/shared";
import { useAction } from "@/store";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface AuthProviderProps extends AuthPayload {}

export const AuthProvider: FC<AuthProviderProps> = ({ children, ...props }) => {
  const { setAuth } = useAction();

  setAuth(props);

  return <>{children}</>;
};
