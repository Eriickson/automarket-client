import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { createContext, useState, FC, useContext, useRef, MutableRefObject } from "react";
import { IAlertDialogOption, IToastOptions, Toast } from "@/components";
import { IApolloServerError, IBreadcrumb } from "@/shared";

interface IUIContext {
  isLoadingScreenActive: boolean;
  msgLoadingScreen: string | null;
  activateLoadingScreen(msg: string | null): void;
  closeLoadingScreen(): void;
  // Alert Dialog
  alertDialog: {
    isOpen: boolean;
    cancelRef: MutableRefObject<null>;
    options: Partial<IAlertDialogOption>;
    // closeByClickPriButton: boolean
    onOpen(option: IAlertDialogOption): void;
    onClose(): void;
  };
  apolloServerError: {
    hasError: boolean;
    options: Partial<IApolloServerError>;
    cancelRef: MutableRefObject<null>;
    onOpen(err: string, option: Omit<IAlertDialogOption, "title" | "name" | "desc" | "role">): void;
    onClose(): void;
  };
  toast: {
    showToast(options: IToastOptions): void;
    options: IToastOptions;
  };
  breadcrumb: {
    items: IBreadcrumb[];
    show: boolean;
    setItems(items: IBreadcrumb[]): void;
    setShow(show: boolean): void;
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

  // Toast
  const [toastOptions, setToastOptions] = useState<IToastOptions>({ title: "", desc: "" });
  const toast = useToast();

  // Breadcrumb
  const [breadcrumbItems, setBreadcrumbItems] = useState<IBreadcrumb[]>([]);
  const [showBreadcrumb, setShowBreadcrumb] = useState(true);

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

  // Toast
  function showToast(options: IToastOptions) {
    setToastOptions(options);
    toast({ render: Toast });
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
        toast: {
          showToast,
          options: toastOptions,
        },
        breadcrumb: {
          items: breadcrumbItems,
          show: showBreadcrumb,
          setItems: setBreadcrumbItems,
          setShow: setShowBreadcrumb,
        },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = (): IUIContext => useContext<IUIContext>(UIContext);

export { UIContextProvider, useUIContext };
