import React, { FC } from "react";
import { UIProvider } from ".";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "@/store";

export const MainProvider: FC = ({ children }) => {
  const { store } = useStore();

  return (
    <ReduxProvider store={store}>
      <UIProvider>{children}</UIProvider>
    </ReduxProvider>
  );
};
