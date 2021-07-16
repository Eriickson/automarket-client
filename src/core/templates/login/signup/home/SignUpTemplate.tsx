import React, { FC } from "react";

// NextJS
import Router from "next/router";

// Packages
import { Box, Text, Button } from "@chakra-ui/react";

// My Elements
import { useSendEmailRegister } from "@/graphql";
import { AutomarketRDLogo } from "@/assets";
import { useUIContext } from "@/context";
import { IFormSignUpOnSubmit } from "@/validations";

// My Components
import { LegalFooter } from "src/core/components/footers/LegalFooter";
import { SignUpForm } from "./SignUpForm";
import { AsideLeft } from "./AsideLeft";

export const SignUpTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog, apolloServerError } = useUIContext();
  const { sendEmailRegister } = useSendEmailRegister();

  async function onSubmit(values: IFormSignUpOnSubmit) {
    activateLoadingScreen(null);
    try {
      await sendEmailRegister({ variables: { email: values.email } });

      alertDialog.onOpen({
        title: "Mensaje enviado",
        desc: "Por favor revisa tu bandeja de email, para que puedas confirmar tu cuenta",
        name: "send-email-register",
        priBtnLabel: "Volver a página de inicio",
        onClickPriBtn: async () => {
          await Router.push("/");
          alertDialog.onClose();
        },
      });
      closeLoadingScreen();
    } catch (err) {
      closeLoadingScreen();
      apolloServerError.onOpen(err.message, {
        priBtnLabel: "Aceptar",
        secBtnLabel: "Restablecer contraseña",
        onClickPriBtn: apolloServerError.onClose,
        onClickSecBtn: async () => {
          await Router.push("/login/reset-password", { query: { email: values.email } });
          apolloServerError.onClose();
        },
      });
    }
  }

  return (
    <Box bg="gray.100" display="flex" flexDir="column" minHeight="100vh">
      <Box alignItems="stretch" display="flex" flex="1">
        <AsideLeft />
        <Box display="flex" flex={1} flexDirection="column" justifyContent="space-between">
          <Box
            alignItems="center"
            bg="white"
            display="flex"
            justifyContent="space-between"
            px={[3, null, 6, 10]}
            py={4}
            shadow="sm"
            w="full"
          >
            <Box w={[56, null, null, 44, 64]}>
              <AutomarketRDLogo />
            </Box>
            <Button colorScheme="pri">Inicia Sesión</Button>
          </Box>
          <Box h="auto" maxW={[null, null, null, "max-content"]} pl={[3, null, 6, 10, 8]} pr={[3, null, 6, 0]}>
            <Text
              color="pri.600"
              fontSize={["3xl", null, "4xl", "5xl", "6xl"]}
              fontWeight="black"
              lineHeight={1}
              mb={8}
            >
              Bienvenido de nuevo
              <Text color="gray.800" fontSize={["xl", null, "2xl", "3xl"]}>
                Regístrate para continuar
              </Text>
            </Text>
            <Box>
              <SignUpForm onSubmit={onSubmit} />
            </Box>
          </Box>
          <Box h="20"></Box>
        </Box>
      </Box>
      <Box alignItems="center" bgColor="white" display="flex" h="20">
        <LegalFooter />
      </Box>
    </Box>
  );
};
