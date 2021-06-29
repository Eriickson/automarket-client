import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, FC, useContext, useRef, MutableRefObject } from "react";
import { IAlertDialogOption } from "@/components";
import { IApolloServerError } from "@/shared";
interface IUIContext {
  isLoadingScreenActive: boolean;
  msgLoadingScreen: string | null;
  activateLoadingScreen(msg: string | null): void;
  closeLoadingScreen(): void;
  // Alert Dialog
  alertDialog: {
    isOpen: boolean;
    cancelRef: MutableRefObject<null>;
    onOpen(option: IAlertDialogOption): void;
    onClose(): void;
    options: Partial<IAlertDialogOption>;
  };
  apolloServerError: {
    hasError: boolean;
    options: Partial<IApolloServerError>;
    cancelRef: MutableRefObject<null>;
    onOpen(err: string, option: Omit<IAlertDialogOption, "title" | "name" | "desc" | "role">): void;
    onClose(): void;
  };
}

const UIContext = createContext<IUIContext | null>(null) as React.Context<IUIContext>;

const UIContextProvider: FC = ({ children }) => {
  // Loading Screen
  const [msgLoadingScreen, setMsgLoadingScreen] = useState<string | null>(null);
  const { isOpen: isLoadingScreenActive, onOpen, onClose } = useDisclosure();

  // AlertDialog
  const { isOpen: isOpenAlertDialog, onOpen: onOpenAlertDialog, onClose: onCloseAlertDialog } = useDisclosure();
  const [alertDialogOptions, setAlertDialogOptions] = useState<
    Partial<IAlertDialogOption> & Partial<IAlertDialogOption>
  >({});
  const cancelRefAlertDialog = useRef(null);

  // ApolloServerError
  const {
    isOpen: hasApolloServerError,
    onOpen: onOpenApolloServerError,
    onClose: onCloseApolloServerError,
  } = useDisclosure();
  const [apolloServerErrorOption, setApolloServerErrorOption] = useState<Partial<IApolloServerError>>({});
  const cancelRefAlertApolloServerError = useRef(null);

  function activateLoadingScreen(msg: string | null) {
    setMsgLoadingScreen(msg);
    onOpen();
  }

  function closeLoadingScreen() {
    onClose();
    setMsgLoadingScreen(null);
  }

  // AlertDialog
  function openAlertDialog(option: IAlertDialogOption) {
    setAlertDialogOptions(option);
    onOpenAlertDialog();
  }
  function closeAlertDialog() {
    setAlertDialogOptions({});
    onCloseAlertDialog();
  }

  // ApolloServerError
  function onOpenAlertApolloServerError(
    error: string,
    options: Omit<IAlertDialogOption, "title" | "name" | "desc" | "role">,
  ) {
    const apolloServerError: IApolloServerError = JSON.parse(error);
    setApolloServerErrorOption({ ...apolloServerError, ...options });
    onOpenApolloServerError();
  }

  function onCloseAlertApolloServerError() {
    setApolloServerErrorOption({});
    onCloseApolloServerError();
  }

  return (
    <UIContext.Provider
      value={{
        // LoadingScreen
        isLoadingScreenActive,
        msgLoadingScreen,
        activateLoadingScreen,
        closeLoadingScreen,

        // AlertDialog
        alertDialog: {
          isOpen: isOpenAlertDialog,
          cancelRef: cancelRefAlertDialog,
          options: alertDialogOptions,
          onClose: closeAlertDialog,
          onOpen: openAlertDialog,
        },

        // ApolloServerError
        apolloServerError: {
          hasError: hasApolloServerError,
          cancelRef: cancelRefAlertApolloServerError,
          options: apolloServerErrorOption,
          onOpen: onOpenAlertApolloServerError,
          onClose: onCloseAlertApolloServerError,
        },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = (): IUIContext => useContext<IUIContext>(UIContext);

export { UIContextProvider, useUIContext };
