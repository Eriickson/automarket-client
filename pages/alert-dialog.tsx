import React from "react";
import { MainLayout } from "@/layouts";
import { Button } from "@chakra-ui/react";
import { useUIContext } from "@/context";

const AlertDialogPage = () => {
  const { alertDialog } = useUIContext();

  return (
    <MainLayout>
      <Button
        onClick={() =>
          alertDialog.onOpen({
            title: "Credenciales incorrectas",
            desc: "Asegúrese de que el nombre de usuario y la contraseña incluidos en la solicitud sean correctos.",
            priBtnLabel: "Aceptar",
            secBtnLabel: "Cancelar",
            onClickPriBtn: alertDialog.onClose,
            role: "danger",
          })
        }
      >
        Click here!
      </Button>
    </MainLayout>
  );
};

export default AlertDialogPage;
