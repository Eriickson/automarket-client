import React, { FC } from "react";
import { useUIContext } from "@/context";
import { ScreenLoader } from "@/components";

export const UIProvider: FC = ({ children }) => {
  const { isLoadingScreenActive, closeLoadingScreen, msgLoadingScreen } = useUIContext();

  return (
    <>
      {children}
      <ScreenLoader isOpen={isLoadingScreenActive} msg={msgLoadingScreen} onClose={closeLoadingScreen} />
    </>
  );
};
