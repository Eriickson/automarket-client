import { useUIContext } from "@/context";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { MenuItem } from "@chakra-ui/react";
import React, { FC } from "react";

export const DisableAccount: FC = () => {
  const { alertDialog } = useUIContext();

  function onDisable() {
    alertDialog.onOpen({
      name: "disabled-account",
      desc: "Se te enviará un mensaje a tu correo electrónico para confirmar que eres Erickson Manuel Holguín.",
      title: "Desactivar Cuenta",
      priBtnLabel: "Desactivar",
      role: "warning",
      secBtnLabel: "Cancelar",
      onClickPriBtn: sendEmail,
      onClickSecBtn: alertDialog.onClose,
    });
  }
  async function sendEmail() {
    console.log("Correo enviado");
  }

  return (
    <MenuItem fontWeight="medium" icon={<SmallCloseIcon />} onClick={onDisable}>
      Desactivar Cuenta
    </MenuItem>
  );
};
