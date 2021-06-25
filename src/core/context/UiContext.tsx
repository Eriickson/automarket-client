import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, FC, useContext } from "react";

interface IUIContext {
  isLoadingScreenActive: boolean;
  msgLoadingScreen: string | null;
  activateLoadingScreen(msg: string | null): void;
  closeLoadingScreen(): void;
}

const UIContext = createContext<IUIContext | null>(null) as React.Context<IUIContext>;

const UIContextProvider: FC = ({ children }) => {
  const [msgLoadingScreen, setMsgLoadingScreen] = useState<string | null>(null);
  const { isOpen: isLoadingScreenActive, onOpen, onClose } = useDisclosure();

  function activateLoadingScreen(msg: string | null) {
    setMsgLoadingScreen(msg);
    onOpen();
  }

  function closeLoadingScreen() {
    onClose();
    setMsgLoadingScreen(null);
  }

  return (
    <UIContext.Provider value={{ isLoadingScreenActive, msgLoadingScreen, activateLoadingScreen, closeLoadingScreen }}>
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = (): IUIContext => useContext<IUIContext>(UIContext);

export { UIContextProvider, useUIContext };
