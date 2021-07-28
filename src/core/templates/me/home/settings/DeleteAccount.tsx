import { useUIContext } from "@/context";
import { DeleteIcon } from "@chakra-ui/icons";
import { MenuItem } from "@chakra-ui/react";
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
    <MenuItem fontWeight="medium" icon={<DeleteIcon />} onClick={onDelete}>
      Eliminar Cuenta
    </MenuItem>
  );
};
