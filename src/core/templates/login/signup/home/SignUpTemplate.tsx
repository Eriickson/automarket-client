import React, { FC } from "react";
import { LoginLayout } from "@/layouts";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { SignUpForm } from "./SignUpForm";
import { IFormSignUpOnSubmit } from "@/validations";
import { useUIContext } from "@/context";
import Router from "next/router";
import { useSendEmailRegister } from "@/graphql";

export const SignUpTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog, apolloServerError } = useUIContext();
  const { sendEmailRegister } = useSendEmailRegister();

  async function onSubmit(values: IFormSignUpOnSubmit) {
    activateLoadingScreen(null);
    try {
      const { data } = await sendEmailRegister({ variables: { email: values.email } });
      console.log(data);

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
    <LoginLayout>
      <Box bg="white" borderColor="gray.100" borderWidth="1px" m="auto" maxWidth="md" mb="3" p="8" shadow="sm">
        <Box>
          <Heading as="h2" fontWeight="medium" mb="1.5" size="xl" textAlign="center">
            Regístrate
          </Heading>
          <Text color="gray.500" fontSize="sm" lineHeight="normal" mb="8" textAlign="center">
            Se le enviará un mensaje a su correo electrónico para verificarlo y pueda crear su cuenta.
          </Text>
        </Box>
        <SignUpForm onSubmit={onSubmit} />
      </Box>
      <Text display="flex" justifyContent="center" textAlign="center">
        Tienes cuenta?
        <NextLink href="signin">
          <Link color="blue.500" cursor="pointer" ml="1">
            Inicia Sesión
          </Link>
        </NextLink>
      </Text>
    </LoginLayout>
  );
};
