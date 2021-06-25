import React, { FC } from "react";
import { UIProvider } from ".";

export const MainProvider: FC = ({ children }) => {
  return <UIProvider>{children}</UIProvider>;
};
