import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, FC, useContext, useRef } from "react";

interface IAlertDialogState {
  title: string;
  desc: string;
  priBtnLabel: string;
  secBtnLabel: string;
  onClickPriBtn(): void;
  onClickSecBtn(): void;
}
interface IUIContext {
  isLoadingScreenActive: boolean;
  msgLoadingScreen: string | null;
  alertDialogState: IAlertDialogState;
  activateLoadingScreen(msg: string | null): void;
  closeLoadingScreen(): void;
  toggleAlertDialog(options: IAlertDialogState): void;
}

const UIContext = createContext<IUIContext | null>(null) as React.Context<IUIContext>;

const UIContextProvider: FC = ({ children }) => {
  const [msgLoadingScreen, setMsgLoadingScreen] = useState<string | null>(null);
  const { isOpen: isLoadingScreenActive, onOpen, onClose } = useDisclosure();

  // AlertDialog
  const [alertDialogState, setAlertDialogState] = useState<IAlertDialogState>();
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState(false);
  const cancelRef = useRef(null);

  function activateLoadingScreen(msg: string | null) {
    setMsgLoadingScreen(msg);
    onOpen();
  }

  function closeLoadingScreen() {
    onClose();
    setMsgLoadingScreen(null);
  }

  function toggleAlertDialog({
    title,
    desc,
    priBtnLabel,
    secBtnLabel,
    onClickPriBtn,
    onClickSecBtn,
  }: IAlertDialogState) {
    setAlertDialogState({ title, desc, priBtnLabel });
  }

  return (
    <UIContext.Provider
      value={{
        isLoadingScreenActive,
        msgLoadingScreen,
        alertDialogState,
        activateLoadingScreen,
        closeLoadingScreen,
        toggleAlertDialog,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = (): IUIContext => useContext<IUIContext>(UIContext);

export { UIContextProvider, useUIContext };
