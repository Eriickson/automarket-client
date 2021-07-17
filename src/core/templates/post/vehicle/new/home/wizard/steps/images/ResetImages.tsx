import { useUIContext } from "@/context";
import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

export const ResetImages: FC = () => {
  const { alertDialog } = useUIContext();

  function onReset() {
    alertDialog.onOpen({
      name: "reset-images",
      title: "Restablecer imágenes",
      desc: "Esta acción eliminará todo el progreso que lleva hasta ahora en el paso de imágenes.",
      role: "danger",
      priBtnLabel: "Restablecer",
      secBtnLabel: "Cancelar",
      onClickPriBtn: () => {
        console.log("Hola");
      },
      onClickSecBtn: alertDialog.onClose,
    });
  }

  return (
    <div>
      <Button colorScheme="red" onClick={onReset}>
        Restablecer
      </Button>
    </div>
  );
};
