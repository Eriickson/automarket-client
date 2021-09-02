import { useUIContext } from "@/context";
import { MenuItem, Box } from "@chakra-ui/react";
import { IconUserOff } from "@tabler/icons";
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
    <MenuItem py="1.5" onClick={onDisable}>
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
        <IconUserOff size="1.25rem" strokeWidth={1.5} />
      </Box>
      Desactivar Cuenta
    </MenuItem>
  );
};
