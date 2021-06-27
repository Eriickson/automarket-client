import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, FC, useContext, useRef, MutableRefObject } from "react";
import { IAlertDialogOption } from "@/components";
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
}

const UIContext = createContext<IUIContext | null>(null) as React.Context<IUIContext>;

const UIContextProvider: FC = ({ children }) => {
  // Loading Screen
  const [msgLoadingScreen, setMsgLoadingScreen] = useState<string | null>(null);
  const { isOpen: isLoadingScreenActive, onOpen, onClose } = useDisclosure();

  // AlertDialog
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<boolean>(false);
  const [alertDialogOptions, setAlertDialogOptions] = useState<Partial<IAlertDialogOption>>({});
  const cancelRefAlertDialog = useRef(null);

  function activateLoadingScreen(msg: string | null) {
    setMsgLoadingScreen(msg);
    onOpen();
  }

  function closeLoadingScreen() {
    onClose();
    setMsgLoadingScreen(null);
  }

  // Alert Dialog
  function onOpenAlertDialog(option: IAlertDialogOption) {
    setAlertDialogOptions(option);
    setIsOpenAlertDialog(true);
  }
  function onCloseAlertDialog() {
    setIsOpenAlertDialog(false);
  }

  return (
    <UIContext.Provider
      value={{
        // Loading Screen
        isLoadingScreenActive,
        msgLoadingScreen,
        activateLoadingScreen,
        closeLoadingScreen,

        // Alert Dialog
        alertDialog: {
          isOpen: isOpenAlertDialog,
          cancelRef: cancelRefAlertDialog,
          onClose: onCloseAlertDialog,
          onOpen: onOpenAlertDialog,
          options: alertDialogOptions,
        },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = (): IUIContext => useContext<IUIContext>(UIContext);

export { UIContextProvider, useUIContext };
