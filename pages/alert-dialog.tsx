import React from "react";
import { MainLayout } from "@/layouts";
import { useUIContext } from "@/context";
import { ConfirmPasswordModal } from "@/components";
import { Button, Text } from "@chakra-ui/react";

const AlertDialogPage = () => {
  const { alertDialog } = useUIContext();

  return (
    <MainLayout>
      {/* <ConfirmPasswordModal /> */}
      <Button
        onClick={() =>
          alertDialog.onOpen({
            title: "Eliminar publicación",
            desc: "Está seguro de que quiere eliminar esta publicación? esta acción no se podrá deshacer.",
            priBtnLabel: "Si, eliminar",
            secBtnLabel: "No, cancelar",
            onClickPriBtn: alertDialog.onClose,
            role: "warning",
            name: "",
          })
        }
      >
        Click here!
      </Button>
    </MainLayout>
  );
};

export default AlertDialogPage;
/* <Button
        onClick={() =>
          alertDialog.onOpen({
            title: "Eliminar publicación",
            desc: "Está seguro de que quiere eliminar esta publicación? esta acción no se podrá deshacer.",
            priBtnLabel: "Si, eliminar",
            secBtnLabel: "No, cancelar",
            onClickPriBtn: alertDialog.onClose,
            role: "warning",
          })
        }
      >
        Click here!
      </Button> */
