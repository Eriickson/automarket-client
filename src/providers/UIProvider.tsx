import React, { FC } from "react";
import { useUIContext } from "@/context";
import { ScreenLoader, AlertDialog, AlertApolloServerError } from "@/components";

export const UIProvider: FC = ({ children }) => {
  const { isLoadingScreenActive, closeLoadingScreen, msgLoadingScreen, alertDialog, apolloServerError } =
    useUIContext();

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
      <AlertApolloServerError
        isOpen={apolloServerError.hasError}
        onClose={apolloServerError.onClose}
        cancelRef={apolloServerError.cancelRef}
        {...apolloServerError.options}
      />
    </>
  );
};
