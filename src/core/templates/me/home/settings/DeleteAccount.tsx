import { useUIContext } from "@/context";
import { MenuItem, Box } from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons";
import React, { FC } from "react";

export const DeleteAccount: FC = () => {
  const { alertDialog } = useUIContext();

  function onDelete() {
    alertDialog.onOpen({
      name: "delete-account",
      desc: "Se te enviará un mensaje a tu correo electrónico para confirmar que eres Erickson Manuel Holguín.",
      title: "Eliminar Cuenta",
      priBtnLabel: "Eliminar",
      role: "danger",
      secBtnLabel: "Cancelar",
      onClickPriBtn: sendEmail,
      onClickSecBtn: alertDialog.onClose,
    });
  }
  async function sendEmail() {
    console.log("Correo enviado");
  }

  return (
    <MenuItem py="1.5" onClick={onDelete}>
      <Box
        alignItems="center"
        bgColor="pri.100"
        color="pri.500"
        display="flex"
        h="6"
        justifyContent="center"
        mr="1.5"
        w="6"
      >
        <IconTrash size="1.25rem" strokeWidth={1.5} />
      </Box>{" "}
      Eliminar Cuenta
    </MenuItem>
  );
};
