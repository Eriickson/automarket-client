import React, { FC } from "react";
import { useUIContext } from "@/context";
import { ScreenLoader, AlertDialog } from "@/components";

export const UIProvider: FC = ({ children }) => {
  const { isLoadingScreenActive, closeLoadingScreen, msgLoadingScreen, alertDialog } = useUIContext();

  return (
    <>
      {children}
      <ScreenLoader isOpen={isLoadingScreenActive} msg={msgLoadingScreen} onClose={closeLoadingScreen} />
      <AlertDialog
        isOpen={alertDialog.isOpen}
        cancelRef={alertDialog.cancelRef}
        onClose={alertDialog.onClose}
        {...alertDialog.options}
      />
    </>
  );
};
