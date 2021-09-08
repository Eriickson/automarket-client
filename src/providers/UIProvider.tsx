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
        cancelRef={alertDialog.cancelRef}
        isOpen={alertDialog.isOpen}
        onClose={alertDialog.onClose}
        {...alertDialog.options}
      />
      <AlertApolloServerError
        cancelRef={apolloServerError.cancelRef}
        isOpen={apolloServerError.hasError}
        onClose={apolloServerError.onClose}
        {...apolloServerError.options}
      />
      {/* <ConfirmPasswordModal/> */}
    </>
  );
};
